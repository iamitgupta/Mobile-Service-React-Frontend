import React, { useEffect, useState } from 'react';
import api from '../services/api';
import queryString from 'query-string';

export default function Compare(props) {

   //create url based

   const filterdata = queryString.parse(props.location.search, { ignoreQueryPrefix: true });
  const { compareIds = ""} = filterdata;



  console.log("Compare Data from URL : ")
  console.log(filterdata);

   const [mobiles, setMobiles] = useState([]);
   const [mobileId, setMobileId] = useState([]);

   const [mobileOne, setMobileOne] = useState("");
   const [mobileTwo, setMobileTwo] = useState("");
   const [mobileThree, setMobileThree] = useState("");



   useEffect(() => {

      setMobileId(compareIds.split(","));

      console.warn("mobile ids to compare "+mobileId)

       setMobileOne("");
       setMobileTwo("");
       setMobileThree("");
  
    if(mobileId.length>0){
        setMobileOne(mobileId.[0]); 
    }
    if(mobileId.length>1){
        setMobileTwo(mobileId.[1]); 
    }
    if(mobileId.length>2){
        setMobileThree(mobileId.[2]); 
    }
    getMobile(
        {
            mobileOne,
            mobileTwo,
            mobileThree
          }
    );
    
  }, [compareIds.length,mobileId.length,mobileOne,mobileTwo,mobileThree]);


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
            <h1>Compare page</h1>
            {mobiles && mobiles.map((mob) => (
                    <h1 class="text-primary">{mob.mobile.title} - Rank {mob.rank}</h1>
                  ))}

        </>

    );
}