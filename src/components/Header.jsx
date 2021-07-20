import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBox';




export default function Header() {

  const [home,setHome] = useState(true);
  const [mobiles,setMobiles] = useState(false);

  let btn_home = home ? "nav-link obj active text-primary" : "nav-link obj text-secondary";
  let btn_mobiles = mobiles ? "nav-link obj active text-primary" : "nav-link obj text-secondary";

  useEffect(() => {
    console.warn("button details "+ btn_home + " "+btn_mobiles);
    
  }, [home,mobiles,btn_home,btn_mobiles])



  function homeClick(){
    setHome(true);
    setMobiles(false);

  }

  function mobileClick(){
    setHome(false);
    setMobiles(true);

  }



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

        <div class=" scrolling-wrapper bg-light nav nav-tabs">


          <Link class={btn_home}  to="/" onClick={homeClick}>HOME</Link>
          <Link class={btn_mobiles} to="/mobiles" onClick={mobileClick}>MOBILES</Link>

          

        </div>


        






      </div>




      <div class="pb-4 mb-4">

      </div>
      <div class="pb-4 mb-4">

      </div>




    </>
  );
}
