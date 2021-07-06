import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';


export default function CompareModal({ compareML, mobileIdManager }) {

    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        let exists = false;
        compareML.forEach(id => {
            exists = false;
            mobiles.forEach(mobile => {
                if (id === mobile.mobileId) {
                    exists = true;
                }

            });
            if (!exists) {
                getMobile(id);
            }
        });



    }, [mobiles]);



    //call only if mobile id doesn't exists in mobiles array
    useEffect(() => {
        let exists = false;
        compareML.forEach(id => {
            exists = false;
            mobiles.forEach(mobile => {
                if (id === mobile.mobileId) {
                    exists = true;
                }

            });
            if (!exists) {
                getMobile(id);
            }
        });



    }, [compareML]);

    //remove extra mobile data if not in compareML
     useEffect(() => {
        let exists = false;
        mobiles.forEach(mobile => {
            exists = false;
            compareML.forEach(id => {
                if (id == mobile.mobileId) {
                    exists = true;
                }

            });
            if (!exists) {
                var index = mobiles.indexOf(mobile);
                mobiles.splice(index, 1);
            }
        });



    }, [compareML.length]);


    async function getMobile(
        mobileId

    ) {
        try {
            const query = `getmobile/${mobileId}`;
            console.warn("Query : " + query);
            const response = await api.get(query);

            //remove duplicate

            setMobiles([...mobiles, response.data]);
            console.log("compare Mobiles api call : ");
            console.warn(response.data);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>

            <div class="fixed-bottom bottom-0 end-0">
                <div class="position-fixed bottom-0 end-0 mb-2 ms-4" >
                {compareML.length > 0 ?
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#compareModal">
              Compare <span class="badge bg-secondary">{compareML.length}</span>
          </button>
              :
              <h1></h1>

            }
                    
                </div>
            </div>






            <div class="modal fade" id="compareModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Mobile Comparison</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <span className="container">
                                <span className="row">
                                    {mobiles && mobiles.map((mobile) => (
                                        <span className="col mobile-small " key={mobile.mobileId}>
                                            <div class="card ">
                                                < div className="card-body">
                                                    <img class="card-img-top" src={mobile.images.[0]}
                                                        alt="Card image cap" height="120px" width="90px"></img>

                                                </div>
                                                <p class="card-text">{mobile.title}</p>

                                                <Link to={`/mobile/${mobile.mobileId}`} class=" font-weight-bold  text-primary mobile-title-list"><button type="button" class="btn btn-warning" data-bs-dismiss="modal">Details</button></Link>
                                                <br />
                                                <button type="button" class="btn btn-success my-2" onClick={() => mobileIdManager(mobile.mobileId)} >Remove</button>
                                                <h3>{mobile.mobileId}</h3>
                                            </div>
                                        </span>
                                    ))}
                                </span>
                            </span>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" >Compare Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}