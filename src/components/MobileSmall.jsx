
import React from 'react';
import { Link } from 'react-router-dom';
export default function MobileSmall(props) {

    const { mobile } = props;

    return (
        <>
            <span class=" obj ps-2 pe-2 my-2 overflow-hidden">
                <div class="card p-1" style={{ width: "140px", height: "290px" }} >
                    < div className="card-body">
                        {/* <img  src={mobile.images.[0]}
                    alt="Card image cap" height="150px"></img> */}

                        <Link to={`/mobile/${mobile.mobileId}/${mobile.title}`} ><img class="img-thumbnail" src={mobile.images[0]} alt="img" class="order-1 order-lg-2" height="140px" />
                        </Link>

                    </div>
                    <p class="text-wrap" >{mobile.title} </p>
                    <Link to={`/mobile/${mobile.mobileId}/${mobile.title}`} ><button type="button" class="btn btn-warning w-100">See Details</button>

                        </Link>
                       
                    
                    {/* <Link to={`/mobile/${mobile.mobileId}`} style={{color: 'white'}} activeStyle={{color: 'red'}}  class="text-warning stretched-link"></Link> */}


                </div>
            </span>
        </>

    );
}