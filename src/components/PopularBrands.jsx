import React, { useEffect, useState } from 'react'
import api from '../services/api';
import '../styles/style.css';
import { Link } from 'react-router-dom';


import MobileSmall from './MobileSmall';


const PopularBrands = () => {






    return (

        <div >

            <nav class="nav bg-primary nav-justified p-1">


                <li class="nav-item">
                    <h5 class=" text-light float-start">Popular Brands</h5>
                </li>
                <li class="nav-item">


                    <Link to={`/mobiles`} >
                        <button type="button" class="btn btn-outline-light float-end btn-sm">See More</button>
                    </Link>


                </li>


            </nav>


            <div className="scrolling-wrapper">


                <div class="card obj">
                <Link to={`/mobiles?brand=Xiaomi`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/LnKHzdG/1491486217-MI.jpg" />
                    </div>
                    </Link>
                </div>

                <div class="card obj">
                <Link to={`/mobiles?brand=Samsung`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/mcR5Q3R/1583216214-Samsung.png" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=Realme`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/gvpZC77/1544081282-realme.png" />
                    </div>
                    </Link>
                </div>

                
                <div class="card obj">
                <Link to={`/mobiles?brand=OnePlus`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/25y2KmT/1402990189-One-Plus.jpg" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=OPPO`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/25rLY1G/1617172309-OPPO.png" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=Vivo`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/vDwJyCx/1416473811-Vivo.jpg" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=Poco`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/K054YXF/1538554046-poco.png" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=Apple`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/CQhCkg3/1280487385-apple.jpg" />
                    </div>
                    
                    </Link>
                </div>




                <div class="card obj">
                <Link to={`/mobiles?brand=Nokia`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/KzXVR5Q/1405947248-Nokia.jpg" />
                    </div>
                    </Link>
                </div>


                <div class="card obj">
                <Link to={`/mobiles?brand=Motorola`} >
                    <div class="card-body">
                        <img src="https://i.ibb.co/QPrRCCt/1466160643-Moto.jpg" />
                    </div>
                    </Link>
                </div>



            </div>


        </div>

    );
};



export default PopularBrands;




