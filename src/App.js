import './App.css';
import React,{useState,useMemo} from 'react';
import {BrowserRouter,Route,Switch,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import { UserContext } from './contexts/context';

function App() {

  const [user,setUser] = useState('Hello from User Context');
  const providerValue = useMemo(()=>({value: user,setValue: setUser}),[user,setUser]);

  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Header/>
      <Switch>

        <UserContext.Provider value={providerValue}>

          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>

        </UserContext.Provider>
      </Switch>
    </div>
    </BrowserRouter>);
}

export default App;
