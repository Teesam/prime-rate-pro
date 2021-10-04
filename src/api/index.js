import { HttpClient } from './client';
import {
  API_REQUEST_TIMED_OUT_ERROR_MSG,
  NETWORK_UNAVAILABLE_ERROR_MSG,
  UNEXPECTED_ERROR_MSG
} from '../redux/constants/string-values';
import Auth from './auth/auth';
import Requests from './admin/requests';
import UserRequests from './user/user-requests';

const requestTimeoutMills = 15000;

const handlerDefaultOptions = { message: undefined, logToAnalytics: true };

export const apiErrorHandler = (
  response = {},
  options = handlerDefaultOptions
) => {
  let message = UNEXPECTED_ERROR_MSG, data = {}, isServerError = false;
  const {
    message: customMessage,
    logToAnalytics
  } = { ...handlerDefaultOptions, ...options };
  const {
    message: errorMessage,
    response: serverResp,
    isCancel,
    isNetwork,
    config
  } = response;

  if (serverResp) {
    isServerError = true;
    message = serverResp.data.error || serverResp.data.message;
    data = { ...serverResp.data };
    delete data.message;
  } else if (isCancel) {
    message = API_REQUEST_TIMED_OUT_ERROR_MSG;
  } else if (isNetwork) {
    message = NETWORK_UNAVAILABLE_ERROR_MSG;
  }

  let errorData = {
    message,
    data: {
      ...data,
      errorMessage,
      api: { method: config?.method, url: config?.url },
    },
  };

  if ((isServerError && logToAnalytics) || logToAnalytics) {
    // analytics().logEvent('api_error', errorData);
  }
  if (!isServerError && !isCancel && customMessage) {
    errorData = { message: customMessage, ...errorData };
  }

  return errorData;
}

const http = new HttpClient({ baseURL: 'https://primerate.herokuapp.com/api/v1'});

export const auth = new Auth(http);
export const requests = new Requests(http);
export const userRequest = new UserRequests(http);

export default {
  http: http.httpClient,
};
