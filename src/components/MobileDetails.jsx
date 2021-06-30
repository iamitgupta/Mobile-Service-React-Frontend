import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MemoryIcon from '@material-ui/icons/Memory';
import SimCardIcon from '@material-ui/icons/SimCard';
import Battery80Icon from '@material-ui/icons/Battery80';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CameraFrontIcon from '@material-ui/icons/CameraFront';
import { getMobile } from '../actions/mobileActions';
import Header from './Header';




export default function MobileDetails() {
    const { mobileId } = useParams();



    console.warn("Mobile ID : " + mobileId);

    const dispatch = useDispatch();
    const mobile = useSelector((state) => state.mobile.mobile);

    useEffect(() => {
        dispatch(getMobile(
            mobileId
        ));
    }, [mobileId]);

    if (!mobile) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Header />
            <div class="container my-4 py-4">

                <ul class="list-group shadow ">
                    <li class="list-group-item card">

                        <div class="container media align-items-lg-center flex-column flex-lg-row ">
                            <div class="row card-body">
                                <div class="col-sm me-2">

                                    <img src={mobile.images.[0]} alt="Generic placeholder image" class="order-1 order-lg-2" height="180px" />



                                </div>
                                <div class="col-sm my-3">
                                    <div class="media-body order-2 order-lg-1 my-4">
                                        <h5 class="mt-0 font-weight-bold mb-2">{mobile.title}</h5>
                                        <span class="badge badge-success p-2">Spec Score : {mobile.specScore}</span>
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
                                        <button type="button" class="btn btn-success">Compare</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </li>

                </ul>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <table class="table table-hover">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colspan="2">General</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sim Type</th>
                                    <td>Dual sim</td>
                                </tr>

                            </tbody>
                        </table>


                        <table class="table table-hover">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colspan="2">Design</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sim Type</th>
                                    <td>Dual sim</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div className="col-sm">
                    <table class="table table-hover">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colspan="2">Camera</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sim Type</th>
                                    <td>Dual sim</td>
                                </tr>

                            </tbody>
                        </table>


                        <table class="table table-hover">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colspan="2">Technical</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sim Type</th>
                                    <td>Dual sim</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </div>

    );

}