import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';
import queryString from 'query-string';
import Filter from './Filter';

import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../services/api';
import { Row,Col, Spinner,Toast,Button} from 'react-bootstrap';
import SortBy from './SortBy';
import { FilterFilled } from '@ant-design/icons';
import Compare from '../components/Compare'


const MobileList = (props) => {



  const filterdata = queryString.parse(props.location.search, { ignoreQueryPrefix: true });
  const { search = "", brand = "", upcoming = "", rearCamera = "", frontCamera = "", display = "", screenSize = "", ram = "", os = "",
    inbuiltMemory = "", battery = "", cpu = "", priceLow = "", priceHigh = "", sort = ""
  } = filterdata;


  const [mobiles, setMobiles] = useState([]);
  const [hasMoreData, sethasMoreData] = useState(true);


  // console.log("Data from URL : ")
  // console.log(filterdata);

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
        priceLow,
        priceHigh,
        sort,
        page,
      }
    );
  }, [search, brand, upcoming, rearCamera, frontCamera, display, screenSize, ram, os, inbuiltMemory, battery, cpu, priceLow, priceHigh, sort]);

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
        priceLow,
        priceHigh,
        sort,
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
      priceLow,
      priceHigh,
      page,
    }
  ) {
    try {
      const query = `mobileservice?brand=${brand}&upcoming=${upcoming}&rearCamera=${rearCamera}&frontCamera=${frontCamera}&display=${display}&screenSize=${screenSize}&ram=${ram}&os=${os}&inbuiltMemory=${inbuiltMemory}&battery=${battery}&cpu=${cpu}&priceLow=${priceLow}&priceHigh=${priceHigh}&search=${search}&sort=${sort}&page=${page}`;
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




  const [sortML, setSortML] = useState("");

  const [compareML, setCompareSortML] = useState([]);

  useEffect(()=>{

  },[compareML]);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");



  



  function mobileIdManager(mobileId){
    var notAvail = true;
    compareML.forEach((id)=>{
        if(id==mobileId){
          notAvail = false;
            // alert("Mobile id : "+id+" already exists");
            var index = compareML.indexOf(mobileId);
            compareML.splice(index, 1)
            setBody("Mobile id : "+mobileId+" removed from compare list")
            setShow(true);
        }
    })
    if(notAvail && compareML.length<3){
      setCompareSortML([...compareML,mobileId]);
      setBody("Mobile id "+mobileId+" added in compare list")
      setShow(true);
          
    }
    if(compareML.length>2){
      setBody("Add only 3 mobiles at a time")
      setShow(true);
    }
    
    
  }




  

  return (

    <>
      <Compare compareML={compareML} mobileIdManager={mobileIdManager} />


      

      <div class="container-fluid py-3" >
        <div class="row">
          <div class="col">
            {window.screen.width <= 1280 ?
              <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Filter  <FilterFilled />
            </button>
              :
              <h1></h1>

            }
          </div>
          <div class="col float-end">
            <SortBy setSortML={setSortML} class="float-right"></SortBy>
          </div>
        </div>

       
       
            <div style={{visibility: "hidden",width:"0px",height:"0px"}}>
        <Filter sort={sortML} style={{visibility: "hidden"}}/>
        </div>



   

   



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Filter sort={sortML} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Apply</button>
      </div>
    </div>
  </div>
</div>

       

        





       



        <div class="row ">
          <div class="col-lg-3">

            {window.screen.width >= 1280 ?

              <Filter sort={sortML} /> :

              <h1></h1>

            }
          </div>
          <div class="col-lg-9 ">
            

              <ul class="list-group  ">
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
                  >
                    {mobiles && mobiles.map((mob) => (
                      <Mobile key={mobiles.mobileId} mobile={mob} mobileIdManager={mobileIdManager} />
                    ))}

                  </InfiniteScroll>
                }


              </ul>
            
          </div>
        </div>
      </div>

      {/* floating window */}

      <div class="fixed-bottom bottom-0 start-0">
                <div class="position-fixed bottom-0 start-0 mb-2 ms-1" >
                <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </Col>
    </Row>
                </div>
            </div>

      

     

      

     
    </>

  );
};



export default MobileList;




