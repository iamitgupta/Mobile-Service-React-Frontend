import React, { useEffect, useState } from 'react'
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
            const query = `mobileservice?sort=popularity&size=6&upcoming=true`;
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

        <div className="m-4 p-4">
            <div class="container-fluid p-2 bg-info" style={{ height: "45px" }}>
                <p class=" float-left text-light">Upcoming Mobiles</p>
                <button type="button" class="btn btn-outline-light float-end btn-sm ">See More</button>
            </div>
           <span className="container-fluid">
                <span className="row">
                    {mobiles && mobiles.map((mob) => (
                        <MobileSmall key={mobiles.mobileId} mobile={mob} />
                    ))}
                </span>
            </span>

        </div>

    );
};



export default UpcomingMobiles;




