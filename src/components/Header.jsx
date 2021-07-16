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
            <Link to="/"><h6 class="text-light">Mobiles❤</h6></Link>
            {/* <Link to="/"><img src="https://i.ibb.co/Vj0z92R/logo.png" width="40px" height="40px" alt="logo"></img></Link> */}


            <form class="d-flex w-75">
              <SearchBar class="form-control border border-right-0" />
            </form>
          </div>
        </nav>

        <nav class=" scrolling-wrapper bg-light">

          <Link class="nav-link obj" to="/">HOME</Link>
          <Link class="nav-link obj " to="/mobiles">MOBILES</Link>

        </nav>






      </div>




      <div class="pb-4 mb-4">

      </div>
      <div class="pb-4 mb-4">

      </div>




    </>
  );
}
