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
import { useEffect, useMemo } from 'react';
import API from './api';

 

const App = () => {
  // const token = useMemo(() => {
  //   const { auth: { token } } = store.getState();
  //   return token;
  // }) 

  // useEffect( () => {
  //   API.http.defaults.commons['Authorization'] = token;
  // }, [token]);




  return (
    <Provider store = { store }>
      <BrowserRouter>
        <PersistGate loading = { null } persistor = { persistor }>
          <div className="App">

            <Switch>

              <Route path = '/' strict exact component = { Home } />

              <Route path = '/register' strict exact component = { Register } />

              <Route path = '/login' strict exact component = { Login } />

              <Route path = '/dashboard' strict exact component = { Dashboard } />

              <Route path = '/dashboard/transaction' strict exact component = { Transaction } />

              <Route path = '/dashboard/profile' strict exact component = { Profile } />

              <Route path = '/admin' strict exact component = { Admin } />

              <Route path = '/admin/createinvestment' strict exact component = { AdminCreateInvestment } />

              <Route path = '/admin/profile' strict exact component = { AdminProfile } />

              <Route path = '/admin/investors' strict exact component = { AdminInvestors } />

              <Route path = '/dashboard/investmentplans' strict exact component = { InvestmentPlans } />

            </Switch>

          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
