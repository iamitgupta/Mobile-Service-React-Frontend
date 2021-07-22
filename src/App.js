import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileDetails from './components/MobileDetails';
import MobileList from './components/MobileList';
import Home from './screens/Home';

import Header from './components/Header';
import Compare from './components/Compare';
import Footer from './components/Footer';



function App() {
  return (
   
   
     
      <Router>
        <div className="App">
        <Header />
      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mobiles" component={MobileList} />
            <Route exact path="/mobile/:mobileId" component={MobileDetails} />
            <Route exact path="/mobile/:mobileId/:name" component={MobileDetails} />
            <Route exact path="/compare" component={Compare} />
            <Route exact path="/compare/:name" component={Compare} />
      
          </Switch>
        </div>
        <Footer />
      </Router>
     
   
  );
}

export default App;
