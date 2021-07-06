import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
 const params = new URLSearchParams();


export default function CompareModal({ compareML, mobileIdManager }) {

    const [mobiles, setMobiles] = useState([]);
    const history = useHistory();
    const params = new URLSearchParams();


    const [compareNowBtn, setCompareNowBtn] = useState(false);

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

        if(mobiles.length>=2){
            setCompareNowBtn(false);
        }else{
            setCompareNowBtn(true);
        }



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

    function compareURLGenerator(){

        let query = "";
        let name = "";
        if (mobiles.length>=2) {
            
            mobiles.forEach((mobile)=>{
                query += `${mobile.mobileId},`;
                name += `${mobile.title} VS `;
            });

        }
        console.warn("Query compare " + query)
        
        //if nothing is selected delete query from url
        if (query) {
            //remove last ,
            query = query.slice(0, -1);
            name = name.slice(0, -4).replaceAll(" ", "-");
            params.append("compareIds", query)
            history.push("../compare?" + params.toString()+"&titles="+name);

    
        } else {
            // console.warn("Nothing selected");
            //delete query parameters
            params.delete("compareIds")
            history.push("mobiles");
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

                                                <Link to={`/mobile/${mobile.mobileId}/${mobile.title}`} class=" font-weight-bold  text-primary mobile-title-list"><button type="button" class="btn btn-warning" data-bs-dismiss="modal">Details</button></Link>
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
                            <button type="button" class="btn btn-primary" onClick={() => compareURLGenerator()} data-bs-dismiss="modal" disabled={compareNowBtn}>Compare Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}