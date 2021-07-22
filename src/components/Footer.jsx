import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBox';




export default function Footer() {



  return (
    


<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Our Services</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="/../mobiles">All Mobiles</a></li>
            <li><a href="#">Audio devices</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Coupons</a></li>
            <li><a href="#">Recharge</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
       
        <div class="footer-pad">
          <h4>Mobileslove</h4>
          <ul class="list-unstyled">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Our Teams</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
      </div>
    
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="" class="icoFacebook" title="Facebook"><FacebookFilled /></a></li>
             <li><a href="" class="icoInstagram" title="instagram"><InstagramFilled /></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2018 - Mobileslove.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
  
  

   
  
  );
}
