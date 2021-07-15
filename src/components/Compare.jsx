import React, { useEffect, useState } from 'react';
import api from '../services/api';
import queryString from 'query-string';

import CompareMobile from './CompareMobile'

export default function Compare(props) {

  //create url based



  const filterdata = queryString.parse(props.location.search, { ignoreQueryPrefix: true });
  const { compareIds = "" } = filterdata;



  console.log("Compare Data from URL : ")
  console.log(filterdata);

  const [mobiles, setMobiles] = useState([]);
  const [mobileIds, setMobileIds] = useState([]);

  const [mobileOne, setMobileOne] = useState("");
  const [mobileTwo, setMobileTwo] = useState("");
  const [mobileThree, setMobileThree] = useState("");

  var id1 = "";
  var id2 = "";
  var id3 = "";
  

  





  useEffect(() => {

    setMobileIds(compareIds.split(","));

    console.warn("mobile ids to compare " + mobileIds)

    for(var i=0; i<mobileIds.length;i++){
      if(i==0){
        id1=mobileIds[i];
      }
      if(i==1){
        id2=mobileIds[i];
      }
      if(i==2){
        id3=mobileIds[i];
      }
    }

    for(var i=0; i<mobiles.length;i++){
      if(i==0){
       setMobileOne(mobiles[i]);
      }
      if(i==1){
        setMobileTwo(mobiles[i]);
      }
      if(i==2){
        setMobileThree(mobiles[i]);
      }
    }

    if(compareIds.length>=2){
      console.warn("getMobile if 2 or more"+id1+" - "+id2+" - "+id3);
      getMobile(
        {
          id1,
          id2,
          id3
        }
      );
    }
    
      
    


  }, [mobileIds.length,mobiles.length]);


  


  async function getMobile(
    {
      id1,
      id2,
      id3
    }

  ) {
    try {
      const query = `comparison?mobileOne=${id1}&mobileTwo=${id2}&mobileThree=${id3}`;
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

  if(mobiles.length>=2 && mobileOne && mobileTwo){
    return (
      <>
      {/* {JSON.stringify(mobileOne)}
      <br/>
      {JSON.stringify(mobileTwo)}
      <br/>
      {JSON.stringify(mobileThree)} */}
      <CompareMobile mobileOne={mobileOne} mobileTwo={mobileTwo} mobileThree={mobileThree} size={mobiles.length}/>
      </>
    );
  }




  return (
    <>
    <h1>Loading.....</h1>
    </>

  );
}