import React from 'react';
import { Link } from 'react-router-dom';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MemoryIcon from '@material-ui/icons/Memory';
import SimCardIcon from '@material-ui/icons/SimCard';
import Battery80Icon from '@material-ui/icons/Battery80';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CameraFrontIcon from '@material-ui/icons/CameraFront';

export default function Mobile({ mobile }) {


    return (
        // <div class="card">

        //   <div class="card-body">
        //     <li class="list-group-item">

        //       <div class="container media align-items-lg-center flex-column flex-lg-row ">
        //         <div class="row card-body">
        //           <div class="col-sm me-2">

        //             <img src={mobile.images.[0]} alt="Generic placeholder image" class="order-1 order-lg-2" height="180px" />



        //           </div>
        //           <div class="col-sm my-3">
        //             <div class="media-body order-2 order-lg-1 my-4">
        //               <h5 class="mt-0 font-weight-bold mb-2">{mobile.title}</h5>
        //               <Link to={`/mobile/${mobile.mobileId}`} style={{ color: 'white' }} activeStyle={{ color: 'red' }} class="text-warning stretched-link">{mobile.title}</Link>
        //               <span class="badge badge-success p-2">Spec Score : {mobile.specScore}</span>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <SimCardIcon /> {mobile.general.simType}
        //               </p>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <PhoneAndroidIcon />{mobile.display.size}
        //               </p>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <MemoryIcon />{mobile.memory.ram} RAM , {mobile.memory.storage} Internal Storage
        //               </p>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <CameraAltIcon />{mobile.camera.rearCamera}
        //               </p>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <CameraFrontIcon />{mobile.camera.frontCamera}
        //               </p>
        //               <p class="font-italic text-muted mb-0 small">
        //                 <Battery80Icon />{mobile.battery.size}
        //               </p>

        //               <div class="d-flex align-items-center justify-content-between mt-1">
        //                 <h6 class="font-weight-bold my-2">₹{mobile.price}</h6>

        //               </div>
        //             </div>
        //           </div>
        //           <div class="col-sm-3">
        //             <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        //               <button type="button" class="btn btn-success">Compare</button>
        //             </div>
        //           </div>

        //         </div>


        //       </div>
        //     </li>
        //     {/* <Link to={`/mobile/${mobile.mobileId}`} style={{ color: 'white' }} activeStyle={{ color: 'red' }} class="text-warning stretched-link"></Link> */}
        //     {/* <a href="#" class="text-warning stretched-link">stretched link</a> */}

        //   </div>
        // </div>



        // ....

        <div>


            <li class="list-group-item  ">

                <div class="container ">
                    <div class="row card-body ">
                        <div class="col-lg-3 ">
                            <Link to={`/mobile/${mobile.mobileId}`} ><img src={mobile.images.[0]} alt="Generic placeholder image" class="order-1 order-lg-2" height="180px" />
                            </Link>

                            <br />
                            <button type="button" class="btn btn-success my-2">Compare</button>




                        </div>
                        <br />
                        <br />
                        <div class="col-lg-6">
                            <div class="media-body order-2 order-lg-1">
                                <Link to={`/mobile/${mobile.mobileId}`} class="mt-0 font-weight-bold mb-2 text-primary">{mobile.title}</Link>
                                <br/>
                                <span class="badge bg-success p-2">Spec Score : {mobile.specScore}</span>
                                <p class="font-italic text-muted mb-0 small">
                                    <SimCardIcon /> {mobile.general.simType}
                                </p>
                                <p class="font-italic text-muted mb-0 small">
                                    <PhoneAndroidIcon />{mobile.display.size}
                                </p>
                                <p class="font-italic text-muted mb-0 small">
                                    <MemoryIcon />{mobile.memory.ram} RAM , {mobile.memory.storage} Internal Storage
                                </p>
                                <p class="font-italic text-muted mb-0 small">
                                    <CameraAltIcon />{mobile.camera.rearCamera}
                                </p>
                                <p class="font-italic text-muted mb-0 small">
                                    <CameraFrontIcon />{mobile.camera.frontCamera}
                                </p>
                                <p class="font-italic text-muted mb-0 small">
                                    <Battery80Icon />{mobile.battery.size}
                                </p>

                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <h6 class="font-weight-bold my-2">₹{mobile.price}</h6>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">

                            </div>
                        </div>

                    </div>


                </div>
            </li>


        </div>










    );
}