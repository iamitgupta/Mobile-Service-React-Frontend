import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import React from 'react';
import { Link} from 'react-router-dom';





export default function Footer() {



  return (
    

<div class="sticky-bottom">
<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Our Services</h4>
          <ul class="list-unstyled">
            <li><Link to="#"></Link></li>
            <li><Link to={`/mobiles`}>All Mobiles</Link></li>
            <li><Link to="#">Audio devices</Link></li>
            <li><Link to="#">Offers</Link></li>
            <li><Link to="#">Coupons</Link></li>
            <li><Link to="#">Recharge</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
       
        <div class="footer-pad">
          <h4>Mobileslove</h4>
          <ul class="list-unstyled">
            <li><Link to={`/about`}>About us</Link></li>
            <li><Link to={"/contact"}>Contact us</Link></li>
            <li><Link to="#">Disclaimer</Link></li>
            <li><Link to={"/privacy"}>Privacy Policy</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to={"/teams"}>Our Teams</Link></li>
            <li><Link to="#">Career</Link></li>
          </ul>
        </div>
      </div>
    
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><Link to="" class="icoFacebook" title="Facebook"><FacebookFilled /></Link></li>
             <li><Link to="" class="icoInstagram" title="instagram"><InstagramFilled /></Link></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2021 - Mobileslove.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>

  
</div>

   
  
  );
}
