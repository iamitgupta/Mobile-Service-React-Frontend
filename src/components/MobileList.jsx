import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';
import queryString from 'query-string';
import Filter from './Filter';

import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../services/api';
import { Spinner } from 'react-bootstrap';
import Header from './Header';






const MobileList = (props) => {



  const filterdata = queryString.parse(props.location.search, { ignoreQueryPrefix: true });
  const { search = "", brand = "" , upcoming="" , rearCamera="" , frontCamera="" , display="", screenSize="",ram="", os="",
          inbuiltMemory="", battery="", cpu=""
    } = filterdata;


  const [mobiles, setMobiles] = useState([]);
  const [hasMoreData, sethasMoreData] = useState(true);


  console.log("Data from URL : ")
  console.log(filterdata);

  const [page, setPage] = useState(0);


  useEffect(() => {
    setPage(0);
    // setSearch(filterdata.search);
    // console.warn("data to filter : " + brand + " : " + search + " : " + upcoming);
    setMobiles([]);
    mobiles.length = 0;
    getMobiles(
      {
        search,
        brand,
        upcoming,
        rearCamera,
        frontCamera,
        display,
        screenSize,
        ram,
        os,
        inbuiltMemory,
        battery,
        cpu,
        page,
      }
    );
  }, [search, brand,upcoming,rearCamera,frontCamera,display,screenSize, ram, os, inbuiltMemory, battery, cpu]);

  useEffect(() => {
    // console.warn("data to filter : page=" + page);
    getMobiles(
      {
        search,
        brand,
        upcoming,
        rearCamera,
        frontCamera,
        display,
        screenSize,
        ram,
        os,
        inbuiltMemory,
        battery,
        cpu,
        page,
      }
    );
  }, [page]);


  async function getMobiles(
    {
      search,
      brand,
      upcoming,
      rearCamera,
      frontCamera,
      display,
      screenSize,
      ram,
      os,
      inbuiltMemory,
      battery,
      cpu,
      page,
    }
  ) {
    try {
      const query = `mobileservice?brand=${brand}&upcoming=${upcoming}&rearCamera=${rearCamera}&frontCamera=${frontCamera}&display=${display}&screenSize=${screenSize}&ram=${ram}&os=${os}&inbuiltMemory=${inbuiltMemory}&battery=${battery}&cpu=${cpu}&search=${search}&page=${page}`;
      console.warn("Query : " + query);
      const response = await api.get(query);
      if (response.data.length > 0) {
        setMobiles([...mobiles, ...response.data]);
        if (response.data.length >= 20) {
          sethasMoreData(true);
          // console.warn("hashmore : " + hasMoreData);
        }

      } else {

        sethasMoreData(false);
        // console.warn("No hashmore : " + hasMoreData);
      }

      // console.log("Mobiles api call : " + response.data);
    } catch (error) {
      sethasMoreData(false);
      console.error(error);
    }

  }


  function fetchMoreData() {
    // console.warn("loading..................");
    if (mobiles) {
      if (mobiles.length >= 20) {
        sethasMoreData(true);
        // console.warn("hashmore : " + hasMoreData);

        setPage(page + 1);
      } else {
        sethasMoreData(false);
        // console.warn("No hashmore : " + hasMoreData);
      }
    }

  }
  // console.warn("Rendering....");
  // console.warn(mobiles);
  // console.warn("More data: " + hasMoreData);
  return (

    <>
      <Header />
      <div class="container-fluid my-5 py-5" >
        <div class="row my-4 ">
          <div class="col-lg-3">
            <Filter brand={brand} />
          </div>
          <div class="col-lg-9">
            <div class="container">

              <ul class="list-group shadow">
                {mobiles &&
                  <InfiniteScroll
                    dataLength={mobiles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={hasMoreData}
                    loader={
                      <div class="mx-auto" style={{ width: "200px" }}>
                        <Spinner animation="border" variant="primary" />
                      </div>


                    }



                  // endMessage={
                  //   <p style={{ textAlign: 'center' }}>
                  //     <b>Yay! You have seen it all</b>
                  //   </p>
                  // }
                  // below props only if you need pull down functionality
                  // refreshFunction={this.refresh}
                  // pullDownToRefresh
                  // pullDownToRefreshThreshold={50}
                  // pullDownToRefreshContent={
                  //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                  // }
                  // releaseToRefreshContent={
                  //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                  // }
                  >
                    {mobiles && mobiles.map((mob) => (
                      <Mobile key={mobiles.mobileId} mobile={mob} />
                    ))}

                  </InfiniteScroll>
                }


              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 py-5" >
        <div class="row my-4 ">
        </div>
      </div>
    </>

  );
};



export default MobileList;




