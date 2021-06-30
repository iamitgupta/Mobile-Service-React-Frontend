import React from 'react'
import { Route } from 'react-router';
import Header from '../components/Header';
import MobileList from '../components/MobileList';
import PopularMobiles from '../components/PopularMobiles';
import UpcomingMobiles from '../components/UpcomingMobiles';


const Home = () => {
  return (
    <div className="container-fluid">
      <Header />

     
      

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

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
