import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBox';




export default function Header() {
  return (
    <>

      <div class="fixed-top">

        <nav class="navbar navbar-expand-lg  bg-primary">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
             <Link to="/"> <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rkSE7MofuBUacGQgRtWKSjH3srrZiwXEkg&usqp=CAU"} alt="LOGO" width={100} height={45}/></Link>
           
            <form class="d-flex w-75">
              <SearchBar class="form-control border border-right-0" />
            </form>
          </div>
        </nav>


        <Navbar bg="light" expand="sm" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

               <Link  className="nav-link" to="/">HOME</Link>
              <Link className="nav-link" to="/mobiles">MOBILES</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className=" pb-4 mb-4">
        <div className=" pb-4 mb-4">

        </div>
      </div>



    </>
  );
}
