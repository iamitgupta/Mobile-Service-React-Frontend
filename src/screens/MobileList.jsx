import React, { useEffect, useState } from 'react'
import Mobile from '../components/Mobile';
import queryString from 'query-string';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../services/api';
import { Row, Col, Spinner, Toast } from 'react-bootstrap';
import SortBy from '../components/SortBy';
import { FilterFilled } from '@ant-design/icons';
import Filter from '../components/Filter'

import CompareModal from '../components/CompareModal'




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
    window.scrollTo(0, 0);
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
      // console.warn("Query : " + query);
      const response = await api.get(query);
      // console.warn("api response mobilelist");
      // console.warn(response);
      if (response.data.length > 0) {
        setMobiles([...mobiles, ...response.data]);
        console.warn(mobiles);
        if (response.data.length >= 20) {
          sethasMoreData(true);
          // console.warn("hashmore : " + hasMoreData);
        }

      } else {

        sethasMoreData(false);
        // console.warn("No hashmore : " + hasMoreData);
      }
      // console.warn("Mobile api call");

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

  useEffect(() => {

  }, [compareML]);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");







  function mobileIdManager(mobileId) {
    var notAvail = true;
    compareML.forEach((id) => {
      if (id == mobileId) {
        notAvail = false;
        // alert("Mobile id : "+id+" already exists");
        var index = compareML.indexOf(mobileId);
        compareML.splice(index, 1)
        setBody("Mobile id : " + mobileId + " removed from compare list")
        setShow(true);
      }
    })
    if (notAvail && compareML.length < 3) {
      setCompareSortML([...compareML, mobileId]);
      setBody("Mobile id " + mobileId + " added in compare list")
      setShow(true);

    }
    if (compareML.length > 2) {
      setBody("Add only 3 mobiles at a time")
      setShow(true);
    }


  }






  return (

    <div>
      <CompareModal compareML={compareML} mobileIdManager={mobileIdManager}></CompareModal>




      <div className="container-fluid" >
        <div className="row">
          <div className="col">
            {window.screen.width <= 1280 ?
              <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Filter  <FilterFilled />
              </button>
              :
              <h1></h1>

            }
          </div>
          <div className="col float-end">
            <SortBy setSortML={setSortML} className="float-right"></SortBy>
          </div>
        </div>



        <div style={{ visibility: "hidden", width: "0px", height: "0px" }}>
          <Filter sort={sortML} style={{ visibility: "hidden" }} />
        </div>









        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Filter sort={sortML} />
              </div>
              <div className="modal-footer">

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply</button>
              </div>
            </div>
          </div>
        </div>













        <div className="row ">
          <div className="col-lg-3">

            {window.screen.width >= 1280 ?

              <Filter sort={sortML} /> :

              <h1></h1>

            }
          </div>
          <div className="col-lg-9 ">


            <ul className="list-group ">
              {mobiles &&
                <InfiniteScroll
                  dataLength={mobiles.length} //This is important field to render the next data
                  next={fetchMoreData}
                  hasMore={hasMoreData}
                  loader={
                    <div className="d-flex justify-content-center" >
                      <Spinner animation="grow" variant="primary" />
                      <Spinner animation="grow" variant="secondary" />
                      <Spinner animation="grow" variant="success" />
                      <Spinner animation="grow" variant="danger" />
                      <Spinner animation="grow" variant="warning" />
                      <Spinner animation="grow" variant="info" />
                      <Spinner animation="grow" variant="dark" />
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

      <div className="fixed-bottom bottom-0 start-0">
        <div className="position-fixed bottom-0 start-0 mb-2 ms-1" >
          <Row>
            <Col xs={6}>
              <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body>{body}</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </div>
      </div>








    </div>

  );
};



export default MobileList;




