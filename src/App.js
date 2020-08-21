import React from 'react';
import './App.css';
import Header from './components/Header'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Search from './components/Search'
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/login" component={Login}/>
    <Route path="/search" component={Search}/>
    <Footer />
    </div>
    
  );
}

export default App;
