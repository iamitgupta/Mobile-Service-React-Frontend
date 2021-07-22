import React, { useEffect } from 'react'
import { Route } from 'react-router';

import MobileList from '../components/MobileList';
import MobileSmall from '../components/MobileSmall';
import PopularBrands from '../components/PopularBrands';
import PopularMobiles from '../components/PopularMobiles';
import UpcomingMobiles from '../components/UpcomingMobiles';


const Home = () => {

  useEffect(() => {
    document.title = "MobilesLove"
  }, [])
  return (
    <div className="container-fluid mt-4 pt-4">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ibb.co/MS1Lg3n/soon.jpg" class="d-block w-100" alt="..." />
            <div class="bg-secondary d-block w-100"></div>
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/MS1Lg3n/soon.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/MS1Lg3n/soon.jpg" class="d-block w-100" alt="..." />
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



      <PopularBrands />
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
