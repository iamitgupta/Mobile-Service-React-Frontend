
import React from 'react';
import { Link } from 'react-router-dom';
export default function MobileSmall(props) {

    const {mobile} = props;

    return (
        <>
        <span className="col mobile-small ">
        <div class="card my-2 p-1 " style={{ width: "140px", height: "330px" }} >
            < div className="card-body">
                <img class="card-img-top" src={mobile.images.[0]}
                    alt="Card image cap" ></img>

            </div>
            <p class="card-text">{mobile.title} </p>
            <button type="button" class="btn btn-warning">Compare</button>

            <Link to={`/mobile/${mobile.mobileId}`} style={{color: 'white'}} activeStyle={{color: 'red'}}  class="text-warning stretched-link"></Link>
 {/* <a href="#" class="text-warning stretched-link">stretched link</a> */}
 
        </div>
        </span>
        </>

    );
}