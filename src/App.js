import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './assets/scss/App.scss';
import Header from './components/Header'
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile'
import Webinar from './screens/Webinar'
import Registed from './screens/Registed'

function App() {
  
  return (
    <BrowserRouter>
    <div className="webinar">
      <div className="top-bar"></div>
      <Header/>
      <main className="main">
          <div className="content">
            <Route path='/' exact={true} component={MainScreen}/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/webinar/:id' component={Webinar}/>
            <Route path='/registed' component={Registed}/>
          </div>
      </main>
    </div>
    <div className="overlay"></div>
    </BrowserRouter>
  );
}

export default App;
