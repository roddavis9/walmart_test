import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Settings from './components/Settings/Settings';



export const AppContext = React.createContext({

});


function App() {
  const [firstName, setFirstName] = useState('James');
  const [lastName, setLastName] = useState('Bond');

  const value = {
    firstName,
    setFirstName,
    lastName,
    setLastName
  }


  return (
    <AppContext.Provider value={value}>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/settings' exact>
            <Settings />
          </Route>
        </Switch>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
