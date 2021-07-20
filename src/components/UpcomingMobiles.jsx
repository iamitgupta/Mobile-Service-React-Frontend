import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/style.css';


import MobileSmall from './MobileSmall';


const UpcomingMobiles = () => {

    console.warn("====Upcoming====");


    const [mobiles, setMobiles] = useState([]);





    useEffect(() => {

        getMobiles();
    }, []);




    async function getMobiles() {
        console.warn("====getMobiles====");
        try {
            const query = `mobileservice?sort=popularity&upcoming=true&size=10`;
            console.warn("Query : " + query);
            const response = await api.get(query);

            setMobiles(response.data);
            console.log("Mobiles api call : " + response.data);

        } catch (error) {
            console.error(error);
        }

    }
    console.warn("Rendering....");
    console.warn(mobiles);




    return (


        <div >


            <nav class="nav bg-primary nav-justified p-1">


                <li class="nav-item">
                    <h5 class=" text-light float-start">Upcoming Mobiles</h5>
                </li>
                <li class="nav-item">


                    <Link to={`/mobiles`} >
                        <button type="button" class="btn btn-outline-light float-end btn-sm">See More</button>
                    </Link>


                </li>


            </nav>

            <div className="scrolling-wrapper">
                {mobiles && mobiles.map((mob) => (
                    <MobileSmall key={mobiles.mobileId} mobile={mob} />
                ))}
            </div>


        </div>
    );
};



export default UpcomingMobiles;




