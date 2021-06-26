import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileDetails from './components/MobileDetails';
import MobileList from './components/MobileList';
import Home from './screens/Home';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">


          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mobiles" component={MobileList} />
            <Route exact path="/mobile/:mobileId" component={MobileDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
