import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileDetails from './components/MobileDetails';
import MobileList from './screens/MobileList';
import Home from './screens/Home';
import PrivacyPolicy from './screens/PrivacyPolicy';
import About from './screens/About';
import Contact from './screens/Contact';
import Teams from './screens/Teams';

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
            <Route exact path="/privacy" component={PrivacyPolicy} />

            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/teams" component={Teams} />
      
          </Switch>
        </div>
        <Footer />
      </Router>
     
   
  );
}

export default App;
