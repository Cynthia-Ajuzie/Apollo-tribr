import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import About from '../views/About';
import Contact from '../views/Contact';
import Login from '../views/Login';
import Signup from '../views/SignUp';
import ThemeProvider from '../helpers/themes/ThemeProvider.helper'



function App() {
  return (
    <>
    <ThemeProvider>
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} /> 
        <Route exact path={'/about'} component={About} /> 
        <Route exact path={'/contact'} component={Contact} /> 
        <Route exact path={'/login'} component={Login} /> 
        <Route exact path={'/sign-up'} component={Signup} /> 
        <Route exact path={'/dashboard'} component={Dashboard} /> 

      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
