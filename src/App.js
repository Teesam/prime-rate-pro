import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';
import Dashboard from './components/dasboard/dashboard';
import Profile from './components/dasboard/profile/profile';
import Transaction from './components/dasboard/transaction/transaction';
import Admin from './components/admin/admin';
import AdminCreateInvestment from './components/admin/create-investment/create-investment';
import AdminProfile from './components/admin/profile/profile';
import AdminInvestors from './components/admin/investors/investors';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import InvestmentPlans from './components/investment-plans/investment-plans';
import ConfirmEmail from './components/confirm-email/confirm-email';
import RegisteredUserRoutes from './components/protected-routes/registered-user-route';
import AdminRoutes from './components/protected-routes/admin-routes';
import FailedVerification from './components/confirm-email/failed-verification';
import PaymentProcessing from './components/processing-payment/processing-payment';
import NotFound from './components/not-found/not-found';
 

const App = () => {


  return (
    <Provider store = { store }>
      <BrowserRouter>
        <PersistGate loading = { null } persistor = { persistor }>
          <div className="App">

            <Switch>

              <Route path = '/' strict exact component = { Home } />

              <Route path = '/register' strict exact component = { Register } />

              <Route path = '/login' strict exact component = { Login } />

              <RegisteredUserRoutes path = '/dashboard' strict exact component = { Dashboard } />

              <RegisteredUserRoutes path = '/dashboard/transaction' strict exact component = { Transaction } />

              <RegisteredUserRoutes path = '/dashboard/profile' strict exact component = { Profile } />

              <RegisteredUserRoutes path = '/dashboard/investmentplans' strict exact component = { InvestmentPlans } />

              <RegisteredUserRoutes path = '/dashboard/paymentprocessing' strict exact component = { PaymentProcessing } />

              <AdminRoutes path = '/admin' strict exact component = { Admin } />

              <AdminRoutes path = '/admin/createinvestment' strict exact component = { AdminCreateInvestment } />

              <AdminRoutes path = '/admin/profile' strict exact component = { AdminProfile } />

              <AdminRoutes path = '/admin/investors' strict exact component = { AdminInvestors } />

              <Route path = '/confirmemail' strict exact component = { ConfirmEmail } />

              <Route path = '/failedverification' strict exact component = { FailedVerification } />

              <Route path = '*' strict exact component = { NotFound } />

            </Switch>

          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
