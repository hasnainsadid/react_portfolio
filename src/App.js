import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
import Home from './Components/Home';
import Developer  from "./Components/Developer";
import Project from "./Components/Project";
import Contact from "./Components/Contact"
import Header from './Components/Header';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Developer" component={Developer}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
