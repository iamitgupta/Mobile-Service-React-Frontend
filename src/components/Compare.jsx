import React, { useEffect, useState } from 'react';
import CompareModal from './CompareModal';
import api from '../services/api';

export default function Compare({compareML, mobileIdManager}) {

   //create url based

   const [mobiles, setMobiles] = useState([]);

   const [mobileOne, setMobileOne] = useState("");
   const [mobileTwo, setMobileTwo] = useState("");
   const [mobileThree, setMobileThree] = useState("");



   useEffect(() => {
       setMobileOne("");
       setMobileTwo("");
       setMobileThree("");
  
    if(compareML.length>0){
        setMobileOne(compareML.[0]); 
    }
    if(compareML.length>1){
        setMobileTwo(compareML.[1]); 
    }
    if(compareML.length>2){
        setMobileThree(compareML.[2]); 
    }
    // getMobile(
    //     {
    //         mobileOne,
    //         mobileTwo,
    //         mobileThree
    //       }
    // );
    
  }, [compareML,mobileOne,mobileTwo,mobileThree]);


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
            <CompareModal compareML={compareML}  mobileIdManager={mobileIdManager}></CompareModal>

        </>

    );
}