import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Route } from 'react-router';
import Header from '../components/Header';
import MobileDetails from '../components/MobileDetails';
import MobileList from '../components/MobileList';
import PopularMobiles from '../components/PopularMobiles';
import UpcomingMobiles from '../components/UpcomingMobiles';


const Home = () => {
  return (
    <div className="container-fluid">
      <Header />

     
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="Second slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<PopularMobiles />
<UpcomingMobiles />


      
      <Route
            path="/mobiles"
            component={MobileList}
            exact
          ></Route>
         
    </div>
  );
};

export default Home;
