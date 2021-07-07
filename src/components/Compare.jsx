import React, { useEffect, useState } from 'react';
import api from '../services/api';
import queryString from 'query-string';

export default function Compare(props) {

  //create url based



  const filterdata = queryString.parse(props.location.search, { ignoreQueryPrefix: true });
  const { compareIds = "" } = filterdata;



  console.log("Compare Data from URL : ")
  console.log(filterdata);

  const [mobiles, setMobiles] = useState([]);
  const [mobileId, setMobileId] = useState([]);

  const [mobileOne, setMobileOne] = useState("");
  const [mobileTwo, setMobileTwo] = useState("");
  const [mobileThree, setMobileThree] = useState("");

  const [mobOne, setMobOne] = useState([]);
  const [mobTwo, setMobTwo] = useState([]);
  const [mobThree, setMobThree] = useState([]);





  useEffect(() => {

    setMobileId(compareIds.split(","));

    console.warn("mobile ids to compare " + mobileId)

    setMobileOne("");
    setMobileTwo("");
    setMobileThree("");

    if (mobileId.length > 0) {
      setMobileOne(mobileId.[0]);
    }
    if (mobileId.length > 1) {
      setMobileTwo(mobileId.[1]);
    }
    if (mobileId.length > 2) {
      setMobileThree(mobileId.[2]);
    }
    getMobile(
      {
        mobileOne,
        mobileTwo,
        mobileThree
      }
    );

    setMobileData();
    

  }, [compareIds.length, mobileId.length, mobileOne, mobileTwo, mobileThree]);


  function setMobileData() {
    setMobOne([]);
    setMobTwo([]);
    setMobThree([]);

    if (mobiles.length > 0) {
      setMobOne(mobiles.[0]);
    }
    if (mobiles.length > 1) {
      setMobTwo(mobiles.[1]);
    }
    if (mobiles.length > 2) {
      setMobThree(mobiles.[2]);
    }
  }


  async function getMobile(
    {
      mobileOne,
      mobileTwo,
      mobileThree
    }

  ) {
    try {
      const query = `comparison?mobileOne=${mobileOne}&mobileTwo=${mobileTwo}&mobileThree=${mobileThree}`;
      console.warn("Query : " + query);
      const response = await api.get(query);
      //   if (response.data) {

      //   }
      setMobiles(response.data);
      console.log("compare Mobiles api call : ");
      console.warn(response.data);
    } catch (error) {
      console.error(error);
    }

  }




  return (
    <>
   

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <table class="table">
              <thead class="thead bg-primary text-light ">
                <tr>
                  <th scope="row"></th>
                  {mobiles && mobiles.map((mob) => (
                   <td> 
                   {mob.mobile.title != null ?
                     mob.mobile.title
                     :
                     <>NA</>
                   }
                   </td>
                  ))}

                </tr>

                
              </thead>
              <tbody>
              <tr>
                  <th scope="row"></th>
                  {mobiles && mobiles.map((mob) => (
                   <td> 
                   {mob.mobile.title != null ?
                      <img  src={mob.mobile.images.[0]}
                      alt="Card image cap" height="100px" width="70px"></img>
                     :
                     <>NA</>
                   }
                   </td>
                  ))}

                </tr>
              </tbody>
            
            </table>
          </div>

        </div>
      </div>

      {/* {JSON.stringify(mobOne)} */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <table class="table">
              <tbody>
              <tr>
                  <th scope="row" colSpan={mobiles.length+1}>General</th>
                 

                </tr>
              <tr>
                  <th scope="row">SIM Type</th>
                  {mobiles && mobiles.map((mob) => (
                   <td> 
                   {mob.mobile.general.simType != null ?
                      mob.mobile.general.simType
                     :
                     <>NA</>
                   }
                   </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Dual SIM</th>
                  {mobiles && mobiles.map((mob) => (
                   <td> 
                   {mob.mobile.general.dualSim != null ?
                      mob.mobile.general.dualSim
                     :
                     <>NA</>
                   }
                   </td>
                  ))}
                </tr>
              </tbody>
            
            </table>
          </div>

        </div>
      </div>



    </>

  );
}