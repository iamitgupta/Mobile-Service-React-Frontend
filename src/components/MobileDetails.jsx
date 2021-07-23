import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MemoryIcon from '@material-ui/icons/Memory';
import SimCardIcon from '@material-ui/icons/SimCard';
import Battery80Icon from '@material-ui/icons/Battery80';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CameraFrontIcon from '@material-ui/icons/CameraFront';
import { Spinner } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import SimilarMobiles from './SimilarMobiles';
import api from '../services/api';






export default function MobileDetails() {
    const { mobileId } = useParams();



    console.warn("Mobile ID : " + mobileId);

    const [mobile, setMobile] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        getMobile(
            mobileId);
    }, [mobileId]);

    async function getMobile(mobileId) {
        // console.warn("====getMobiles====");
        try {
            const query = `getmobile/${mobileId}`;
            // console.warn("Query : " + query);
            const response = await api.get(query);

            setMobile(response.data);
            // console.log("Mobiles api call : " + response.data);

        } catch (error) {
            console.error(error);
        }

    }



    if (!mobile) {
        return <div class="d-flex justify-content-center" >
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </div>;
    }
    return (
        <div>
            <div class="container-fluid my-4 py-4">

                <ul class="list-group shadow ">
                    <li class="list-group-item card">

                        <div class="container media align-items-lg-center flex-column flex-lg-row ">
                            <div class="row card-body">
                                <div class="col-sm-2 d-flex justify-content-center overflow-hidden">

                                    {/* <img src={mobile.images[0]} alt="Generic placeholder image" class="order-1 order-lg-2" height="180px" /> */}
                                    <Carousel slide={false}>
                                        {mobile.images.map((img => {
                                            return (
                                                <Carousel.Item interval={5000}>


                                                    <div class="image-details-img" >
                                                        <img
                                                            src={img}
                                                            alt="slide"
                                                        />

                                                    </div>

                                                </Carousel.Item>
                                            );
                                        }))}

                                    </Carousel>




                                    {/* image */}


                                </div>
                                <div class="col-lg-8 my-3">
                                    <div class="media-body order-2 order-lg-1 ">
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
                                        {mobile.upcoming ?

                                            <span class="badge bg-warning text-dark">Upcoming</span>

                                            :
                                            <div></div>
                                        }
                                    </div>
                                </div>


                            </div>


                        </div>
                    </li>

                </ul>
            </div>
            {/* General */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <table class="table table-hover table-striped table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">General</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.general.simType != null ?
                                    <tr>
                                        <th scope="row">Sim Type</th>
                                        <td>
                                            {mobile.general.simType}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.general.dualSim != null ?
                                    <tr>
                                        <th scope="row">Dual SIM</th>
                                        <td>
                                            {mobile.general.dualSim}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.general.simSize != null ?
                                    <tr>
                                        <th scope="row">SIM Size</th>
                                        <td>
                                            {mobile.general.simSize}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.general.deviceType != null ?
                                    <tr>
                                        <th scope="row">Device</th>
                                        <td>
                                            {mobile.general.deviceType}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.general.releaseDate != null ?
                                    <tr>
                                        <th scope="row">Released Date</th>
                                        <td>
                                            {mobile.general.releaseDate}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }



                            </tbody>
                        </table>


                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Camera</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.camera.rearCamera != null ?
                                    <tr>
                                        <th scope="row">Rear Camera</th>
                                        <td>
                                            {mobile.camera.rearCamera}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.camera.frontCamera != null ?
                                    <tr>
                                        <th scope="row">Front Camera</th>
                                        <td>
                                            {mobile.camera.frontCamera}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.camera.features != null ?
                                    <tr>
                                        <th scope="row">Camera Features</th>
                                        <td>
                                            {mobile.camera.features}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.camera.videoRecording != null ?
                                    <tr>
                                        <th scope="row">Video recording</th>
                                        <td>
                                            {mobile.camera.videoRecording}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.camera.frontVideoRecording != null ?
                                    <tr>
                                        <th scope="row">Front Video recording</th>
                                        <td>
                                            {mobile.camera.frontVideoRecording}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.camera.flash != null ?
                                    <tr>
                                        <th scope="row">Flash</th>
                                        <td>
                                            {mobile.camera.flash}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>

                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Display</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.display.type != null ?
                                    <tr>
                                        <th scope="row">Display Type</th>
                                        <td>
                                            {mobile.display.type}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.touch != null ?
                                    <tr>
                                        <th scope="row">Touch</th>
                                        <td>
                                            {mobile.display.touch}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.size != null ?
                                    <tr>
                                        <th scope="row">Size</th>
                                        <td>
                                            {mobile.display.size}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.aspectRatio != null ?
                                    <tr>
                                        <th scope="row">Aspect Ratio</th>
                                        <td>
                                            {mobile.display.aspectRatio}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.ppi != null ?
                                    <tr>
                                        <th scope="row">PPI</th>
                                        <td>
                                            {mobile.display.ppi}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.screenToBodyRatio != null ?
                                    <tr>
                                        <th scope="row">Screen to Body ratio</th>
                                        <td>
                                            {mobile.display.screenToBodyRatio}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.glassType != null ?
                                    <tr>
                                        <th scope="row">Glass type</th>
                                        <td>
                                            {mobile.display.glassType}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.type != null ?
                                    <tr>
                                        <th scope="row">Display Type</th>
                                        <td>
                                            {mobile.display.type}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.features != null ?
                                    <tr>
                                        <th scope="row">Display Features</th>
                                        <td>
                                            {mobile.display.features}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.display.notch != null ?
                                    <tr>
                                        <th scope="row">Notch</th>
                                        <td>
                                            {mobile.display.notch}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>

                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Memory</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.memory.ram != null ?
                                    <tr>
                                        <th scope="row">RAM</th>
                                        <td>
                                            {mobile.memory.ram}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.memory.storage != null ?
                                    <tr>
                                        <th scope="row">Internal Storage</th>
                                        <td>
                                            {mobile.memory.storage}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.memory.cardSlot != null ?
                                    <tr>
                                        <th scope="row">Card Slot</th>
                                        <td>
                                            {mobile.memory.cardSlot}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>

                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Connectivity</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.connectivity.gprs != null ?
                                    <tr>
                                        <th scope="row">GPRS</th>
                                        <td>
                                            {mobile.connectivity.gprs}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.edge != null ?
                                    <tr>
                                        <th scope="row">EDGE</th>
                                        <td>
                                            {mobile.connectivity.edge}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.threeG != null ?
                                    <tr>
                                        <th scope="row">3G</th>
                                        <td>
                                            {mobile.connectivity.threeG}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.fourG != null ?
                                    <tr>
                                        <th scope="row">4G</th>
                                        <td>
                                            {mobile.connectivity.fourG}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.fiveG != null ?
                                    <tr>
                                        <th scope="row">5G</th>
                                        <td>
                                            {mobile.connectivity.fiveG}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.volte != null ?
                                    <tr>
                                        <th scope="row">VoLte</th>
                                        <td>
                                            {mobile.connectivity.volte}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                                {mobile.connectivity.wifi != null ?
                                    <tr>
                                        <th scope="row">WiFi</th>
                                        <td>
                                            {mobile.connectivity.wifi}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.bluetooth != null ?
                                    <tr>
                                        <th scope="row">Bluetooth</th>
                                        <td>
                                            {mobile.connectivity.bluetooth}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.usb != null ?
                                    <tr>
                                        <th scope="row">USB</th>
                                        <td>
                                            {mobile.connectivity.usb}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.usbFeatures != null ?
                                    <tr>
                                        <th scope="row">USB Features</th>
                                        <td>
                                            {mobile.connectivity.usbFeatures}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.connectivity.wirelessCharging != null ?
                                    <tr>
                                        <th scope="row">Wireless Charging</th>
                                        <td>
                                            {mobile.connectivity.wirelessCharging}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>

                    </div>
                    {/* col 2 */}
                    <div className="col-sm">
                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Battery</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.battery.size != null ?
                                    <tr>
                                        <th scope="row">Size</th>
                                        <td>
                                            {mobile.battery.size}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.battery.type != null ?
                                    <tr>
                                        <th scope="row">Type</th>
                                        <td>
                                            {mobile.battery.type}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.battery.fastCharging != null ?
                                    <tr>
                                        <th scope="row">Fast Charging</th>
                                        <td>
                                            {mobile.battery.fastCharging}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.battery.reverseCharging != null ?
                                    <tr>
                                        <th scope="row">Reverse Charging</th>
                                        <td>
                                            {mobile.battery.reverseCharging}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>


                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Technical</th>

                                </tr>
                            </thead>
                            <tbody>

                                {mobile.technical.os != null ?
                                    <tr>
                                        <th scope="row">OS</th>
                                        <td>
                                            {mobile.technical.os}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                                {mobile.technical.chipset != null ?
                                    <tr>
                                        <th scope="row">Processor</th>
                                        <td>
                                            {mobile.technical.chipset}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }



                                {mobile.technical.cpu != null ?
                                    <tr>
                                        <th scope="row">CPU</th>
                                        <td>
                                            {mobile.technical.cpu}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }



                                {mobile.technical.coreDetails != null ?
                                    <tr>
                                        <th scope="row">Core Details</th>
                                        <td>
                                            {mobile.technical.coreDetails}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                                {mobile.technical.gpu != null ?
                                    <tr>
                                        <th scope="row">GPU</th>
                                        <td>
                                            {mobile.technical.gpu}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }




                                {mobile.technical.ipRating != null ?
                                    <tr>
                                        <th scope="row">IP Rating</th>
                                        <td>
                                            {mobile.technical.ipRating}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                                {mobile.technical.java != null ?
                                    <tr>
                                        <th scope="row">JAVA</th>
                                        <td>
                                            {mobile.technical.java}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                                {mobile.technical.browser != null ?
                                    <tr>
                                        <th scope="row">Browser</th>
                                        <td>
                                            {mobile.technical.browser}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>

                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Extras</th>

                                </tr>
                            </thead>
                            <tbody>

                                {mobile.extra.gps != null ?
                                    <tr>
                                        <th scope="row">GPS</th>
                                        <td>
                                            {mobile.extra.gps}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.fingerprintSensor != null ?
                                    <tr>
                                        <th scope="row">Fingerprint Sensor</th>
                                        <td>
                                            {mobile.extra.fingerprintSensor}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.faceUnlock != null ?
                                    <tr>
                                        <th scope="row">Face Unlock</th>
                                        <td>
                                            {mobile.extra.faceUnlock}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.sensors != null ?
                                    <tr>
                                        <th scope="row">Sensors</th>
                                        <td>
                                            {mobile.extra.sensors}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.threePFivemmHeadphoneJack != null ?
                                    <tr>
                                        <th scope="row">3.5 mm Jack</th>
                                        <td>
                                            {mobile.extra.threePFivemmHeadphoneJack}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.extra != null ?
                                    <tr>
                                        <th scope="row">Extra</th>
                                        <td>
                                            {mobile.extra.extra}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.waterResistance != null ?
                                    <tr>
                                        <th scope="row">Water Resistance</th>
                                        <td>
                                            {mobile.extra.waterResistance}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.ipRating != null ?
                                    <tr>
                                        <th scope="row">IP Rating</th>
                                        <td>
                                            {mobile.extra.gpipRatings}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.dustResistant != null ?
                                    <tr>
                                        <th scope="row">Dust Resistance</th>
                                        <td>
                                            {mobile.extra.dustResistant}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }

                                {mobile.extra.extraFeatures != null ?
                                    <tr>
                                        <th scope="row">Extra Features</th>
                                        <td>
                                            {mobile.extra.extraFeatures}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }



                            </tbody>
                        </table>

                        <table class="table table-hover table-striped">
                            <thead class="thead bg-primary text-light">
                                <tr>
                                    <th scope="col" colSpan="2">Multimedia</th>

                                </tr>
                            </thead>
                            <tbody>
                                {mobile.multimedia.email != null ?
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>
                                            {mobile.multimedia.email}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.multimedia.music != null ?
                                    <tr>
                                        <th scope="row">Music</th>
                                        <td>
                                            {mobile.multimedia.music}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.multimedia.video != null ?
                                    <tr>
                                        <th scope="row">Video</th>
                                        <td>
                                            {mobile.multimedia.video}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.multimedia.fmRadio != null ?
                                    <tr>
                                        <th scope="row">FM Radio</th>
                                        <td>
                                            {mobile.multimedia.fmRadio}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }
                                {mobile.multimedia.documentReader != null ?
                                    <tr>
                                        <th scope="row">Document Reader</th>
                                        <td>
                                            {mobile.multimedia.documentReader}
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                                }


                            </tbody>
                        </table>



                    </div>

                </div>
            </div>

            <SimilarMobiles title={mobile.brand} />
        </div>

    );

}