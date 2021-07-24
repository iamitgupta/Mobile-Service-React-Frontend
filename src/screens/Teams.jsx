import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import React from 'react'



const Teams = () => {
  window.scrollTo(0, 0);
 
  return (
    <div class="py-5 team4">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Experienced & Professional Team</h3>
        <h6 class="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      {/* <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row">
          <div class="col-md-12">
            <img src="https://i.ibb.co/sCLmxr8/profile-pic.png" alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Amit Gupta</h5>
              <h6 class="subtitle mb-3">Founder & Full Stack Developer</h6>
              <p>holds Engineering Degree(BE) in CSE from Mumbai University. Loves Technology and solving the complex problems.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><FacebookFilled /></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><InstagramFilled /></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><LinkedinFilled /></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><TwitterSquareFilled /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>

    </div>
  </div>
</div>
  );
};

export default Teams;
