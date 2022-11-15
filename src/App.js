import react, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Services from './components/pages/Servicess/Services';
import Faq from './components/pages/Faq/Faq'
import SignUP from './components/pages/SignUp';
import Contact from './components/pages/Contacts/Contact';
import Diet from './components/pages/Servicess/Functions/Diet';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/sign-up' component={SignUP}/>
        <Route path= '/contact' component={Contact}/>
        <Route path='/diet' component={Diet}/>

        
      </Switch>
      </Router>
    </>
  );
}

export default App;
