import React from 'react';


export default function CompareMobile({ mobileOne, mobileTwo, mobileThree, size }) {

    console.warn("mobile 1");
    console.warn(mobileOne);

    console.warn("mobile 2");
    console.warn(mobileTwo);


    console.warn("mobile 3");
    console.warn(mobileThree);





    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm">
                        <table class="table">
                            <thead class="thead bg-primary text-light  ">
                               
                                <tr >
                                    <td></td>
                               

                                    {mobileOne && (
                                        <td>
                                            {mobileOne.mobile.title != null ?
                                                mobileOne.mobile.title
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}

                                    {mobileTwo && (
                                        <td>
                                            {mobileTwo.mobile.title != null ?
                                                mobileTwo.mobile.title
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}

                                    {mobileThree && (
                                        <td>
                                            {mobileThree.mobile.title != null ?
                                                mobileThree.mobile.title
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}

                                </tr>


                            </thead>
                            <tbody >
                                <tr>
                                <td></td>

                                    {mobileOne && (
                                        <td>
                                            {mobileOne.mobile.images[0] != null ?
                                                <img src={mobileOne.mobile.images[0]}
                                                    alt="Card image cap" height="100px" width="70px"></img>
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}
                                    {mobileTwo && (
                                        <td>
                                            {mobileTwo.mobile.images[0] != null ?
                                                <img src={mobileTwo.mobile.images[0]}
                                                    alt="Card image cap" height="100px" width="70px"></img>
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}
                                    {mobileThree && (
                                        <td>
                                            {mobileThree.mobile.images[0] != null ?
                                                <img src={mobileThree.mobile.images[0]}
                                                    alt="Card image cap" height="100px" width="70px"></img>
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}

                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            {/* specifications */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <table class="table table-hover table-striped table-striped">
                            <tbody>
                                <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Overall</th>

                                </tr>
                                {/* rank */}
                                <tr>
                                    <th scope="row">Rank</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.rank != null ?

                                                <td>
                                                    <span class="badge bg-warning text-dark"> {mobileOne.rank}</span>

                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.rank != null ?

                                                <td>
                                                    <span class="badge bg-warning text-dark">  {mobileTwo.rank}</span>

                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileThree && (
                                        <>
                                            {mobileThree && mobileThree.rank != null ?

                                                <td>
                                                    <span class="badge bg-warning text-dark"> {mobileThree.rank}</span>

                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}






                                </tr>
                                {/* general */}
                                <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>General</th>

                                </tr>

                                {/* sim type */}
                                <tr>
                                    <th scope="row">SIM Type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.general.simType != null ?

                                                <td>
                                                    {mobileOne.mobile.general.simType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.general.simType != null ?

                                                <td>
                                                    {mobileTwo.mobile.general.simType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.general.simType != null ?

                                                <td>
                                                    {mobileThree.mobile.general.simType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* dual sim */}
                                <tr>
                                    <th scope="row">Dual SIM</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.general.dualSim != null ?

                                                <td>
                                                    {mobileOne.mobile.general.dualSim}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.general.dualSim != null ?

                                                <td>
                                                    {mobileTwo.mobile.general.dualSim}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.general.dualSim != null ?

                                                <td>
                                                    {mobileThree.mobile.general.dualSim}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* sim size */}
                                <tr>
                                    <th scope="row">SIM Size</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.general.simSize != null ?

                                                <td>
                                                    {mobileOne.mobile.general.simSize}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.general.simSize != null ?

                                                <td>
                                                    {mobileTwo.mobile.general.simSize}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.general.simSize != null ?

                                                <td>
                                                    {mobileThree.mobile.general.simSize}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* device type */}
                                <tr>
                                    <th scope="row">Device type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.general.deviceType != null ?

                                                <td>
                                                    {mobileOne.mobile.general.deviceType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.general.deviceType != null ?

                                                <td>
                                                    {mobileTwo.mobile.general.deviceType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.general.deviceType != null ?

                                                <td>
                                                    {mobileThree.mobile.general.deviceType}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Release date */}
                                <tr>
                                    <th scope="row">Release date</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.general.releaseDate != null ?

                                                <td>
                                                    {mobileOne.mobile.general.releaseDate}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.general.releaseDate != null ?

                                                <td>
                                                    {mobileTwo.mobile.general.releaseDate}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.general.releaseDate != null ?

                                                <td>
                                                    {mobileThree.mobile.general.releaseDate}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* Camera */}
                                 <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Camera</th>

                                </tr>

                                 {/* Rear Camera */}
                                 <tr>
                                    <th scope="row">Rear Camera</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.rearCamera != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.rearCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.rearCamera != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.rearCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.rearCamera != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.rearCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* front Camera */}
                                <tr>
                                    <th scope="row">Front Camera</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.frontCamera != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.frontCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.frontCamera != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.frontCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.frontCamera != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.frontCamera}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Camera features */}
                                <tr>
                                    <th scope="row">Camera Features</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.features != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.features}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.features != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.features}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.features != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.features}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* video Recording */}
                                <tr>
                                    <th scope="row">Video Recording</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.videoRecording != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.videoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.videoRecording != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.videoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.videoRecording != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.videoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* front Video  Recording */}
                                <tr>
                                    <th scope="row">Front Video Recording</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.frontVideoRecording != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.frontVideoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.frontVideoRecording != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.frontVideoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.frontVideoRecording != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.frontVideoRecording}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Flash */}
                                <tr>
                                    <th scope="row">Flash</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.camera.flash != null ?

                                                <td>
                                                    {mobileOne.mobile.camera.flash}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.camera.flash != null ?

                                                <td>
                                                    {mobileTwo.mobile.camera.flash}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.camera.flash != null ?

                                                <td>
                                                    {mobileThree.mobile.camera.flash}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* Didplay */}
                                 <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Display</th>

                                </tr>

                                 {/* Display type */}
                                 <tr>
                                    <th scope="row">Display Type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.type != null ?

                                                <td>
                                                    {mobileOne.mobile.display.type}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.type != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.type}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.type != null ?

                                                <td>
                                                    {mobileThree.mobile.display.type}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* touch */}
                                <tr>
                                    <th scope="row">Touch</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.touch != null ?

                                                <td>
                                                    {mobileOne.mobile.display.touch}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.touch != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.touch}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.touch != null ?

                                                <td>
                                                    {mobileThree.mobile.display.touch}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Size */}
                                <tr>
                                    <th scope="row">Size</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.size != null ?

                                                <td>
                                                    {mobileOne.mobile.display.size}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.size != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.size}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.size != null ?

                                                <td>
                                                    {mobileThree.mobile.display.size}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* aspectRatio */}
                                <tr>
                                    <th scope="row">Aspect Ratio</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.aspectRatio != null ?

                                                <td>
                                                    {mobileOne.mobile.display.aspectRatio}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.aspectRatio != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.aspectRatio}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.aspectRatio != null ?

                                                <td>
                                                    {mobileThree.mobile.display.aspectRatio}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* PPI */}
                                <tr>
                                    <th scope="row">PPI</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.ppi != null ?

                                                <td>
                                                    {mobileOne.mobile.display.ppi}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.ppi != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.ppi}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.ppi != null ?

                                                <td>
                                                    {mobileThree.mobile.display.ppi}
                                                </td>

                                                :
                                                <>NA</>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* screenToBodyRatio */}
                                <tr>
                                    <th scope="row">Screen to Body Ratio</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.screenToBodyRatio != null ?

                                                <td>
                                                    {mobileOne.mobile.display.screenToBodyRatio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.screenToBodyRatio != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.screenToBodyRatio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.screenToBodyRatio != null ?

                                                <td>
                                                    {mobileThree.mobile.display.screenToBodyRatio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* glassType */}
                                <tr>
                                    <th scope="row">Glass Type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.glassType != null ?

                                                <td>
                                                    {mobileOne.mobile.display.glassType}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.glassType != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.glassType}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.glassType != null ?

                                                <td>
                                                    {mobileThree.mobile.display.glassType}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* glass type */}
                                 <tr>
                                    <th scope="row">Display Type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.type != null ?

                                                <td>
                                                    {mobileOne.mobile.display.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.type != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.type != null ?

                                                <td>
                                                    {mobileThree.mobile.display.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* display features */}
                                <tr>
                                    <th scope="row">Display features</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.features != null ?

                                                <td>
                                                    {mobileOne.mobile.display.features}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.features != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.features}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.features != null ?

                                                <td>
                                                    {mobileThree.mobile.display.features}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* display notch */}
                                <tr>
                                    <th scope="row">Notch</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.display.notch != null ?

                                                <td>
                                                    {mobileOne.mobile.display.notch}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.display.notch != null ?

                                                <td>
                                                    {mobileTwo.mobile.display.notch}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.display.notch != null ?

                                                <td>
                                                    {mobileThree.mobile.display.notch}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Memory */}
                                <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Memory</th>

                                </tr>
                                {/* ram*/}
                                <tr>
                                    <th scope="row">RAM</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.memory.ram != null ?

                                                <td>
                                                    {mobileOne.mobile.memory.ram}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.memory.ram != null ?

                                                <td>
                                                    {mobileTwo.mobile.memory.ram}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.memory.ram != null ?

                                                <td>
                                                    {mobileThree.mobile.memory.ram}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Internal Memory*/}
                                <tr>
                                    <th scope="row">Internal Memory</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.memory.storage != null ?

                                                <td>
                                                    {mobileOne.mobile.memory.storage}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.memory.storage != null ?

                                                <td>
                                                    {mobileTwo.mobile.memory.storage}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.memory.storage != null ?

                                                <td>
                                                    {mobileThree.mobile.memory.storage}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* cardSlot*/}
                                 <tr>
                                    <th scope="row">Card Slot</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.memory.cardSlot != null ?

                                                <td>
                                                    {mobileOne.mobile.memory.cardSlot}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.memory.cardSlot != null ?

                                                <td>
                                                    {mobileTwo.mobile.memory.cardSlot}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.memory.cardSlot != null ?

                                                <td>
                                                    {mobileThree.mobile.memory.cardSlot}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                {/* Connectivity */}
                                <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Connectivity</th>

                                </tr>
                                {/* GPRS*/}
                                <tr>
                                    <th scope="row">GPRS</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.gprs != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.gprs}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.gprs != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.gprs}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.gprs != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.gprs}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* edge*/}
                                <tr>
                                    <th scope="row">EDGE</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.edge != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.edge}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.edge != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.edge}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.edge != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.edge}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* threeG*/}
                                 <tr>
                                    <th scope="row">3G</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.threeG != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.threeG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.threeG != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.threeG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.threeG != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.threeG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* 4G */}

                                <tr>
                                    <th scope="row">4G</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.fourG != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.fourG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.fourG != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.fourG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.fourG != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.fourG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* 5G */}

                                <tr>
                                    <th scope="row">5G</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.fiveG != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.fiveG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.fiveG != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.fiveG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.fiveG != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.fiveG}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* volte */}

                                 <tr>
                                    <th scope="row">VoLte</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.volte != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.volte}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.volte != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.volte}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.volte != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.volte}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* wifi */}

                                 <tr>
                                    <th scope="row">WiFi</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.wifi != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.wifi}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.wifi != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.wifi}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.wifi != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.wifi}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* bluetooth */}

                                <tr>
                                    <th scope="row">bluetooth</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.bluetooth != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.bluetooth}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.bluetooth != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.bluetooth}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.bluetooth != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.bluetooth}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* usb */}

                                <tr>
                                    <th scope="row">USB</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.usb != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.usb}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.usb != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.usb}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.usb != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.usb}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* usbFeatures */}

                                 <tr>
                                    <th scope="row">USB Features</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.usbFeatures != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.usbFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.usbFeatures != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.usbFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.usbFeatures != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.usbFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* wirelessCharging */}

                                <tr>
                                    <th scope="row">Wireless Charging</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.connectivity.wirelessCharging != null ?

                                                <td>
                                                    {mobileOne.mobile.connectivity.wirelessCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.connectivity.wirelessCharging != null ?

                                                <td>
                                                    {mobileTwo.mobile.connectivity.wirelessCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.connectivity.wirelessCharging != null ?

                                                <td>
                                                    {mobileThree.mobile.connectivity.wirelessCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                {/* Battery */}
                                <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Battery</th>

                                </tr>
                                {/* battery size*/}
                                <tr>
                                    <th scope="row">Size</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.battery.size != null ?

                                                <td>
                                                    {mobileOne.mobile.battery.size}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.battery.size != null ?

                                                <td>
                                                    {mobileTwo.mobile.battery.size}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.battery.size != null ?

                                                <td>
                                                    {mobileThree.mobile.battery.size}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                {/* battery type*/}
                                <tr>
                                    <th scope="row">Type</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.battery.type != null ?

                                                <td>
                                                    {mobileOne.mobile.battery.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.battery.type != null ?

                                                <td>
                                                    {mobileTwo.mobile.battery.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.battery.type != null ?

                                                <td>
                                                    {mobileThree.mobile.battery.type}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                {/* battery fastCharging*/}
                                <tr>
                                    <th scope="row">Fast Charging</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.battery.fastCharging != null ?

                                                <td>
                                                    {mobileOne.mobile.battery.fastCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.battery.fastCharging != null ?

                                                <td>
                                                    {mobileTwo.mobile.battery.fastCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.battery.fastCharging != null ?

                                                <td>
                                                    {mobileThree.mobile.battery.fastCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* battery reverseCharging*/}
                                 <tr>
                                    <th scope="row">Reverse Charging</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.battery.reverseCharging != null ?

                                                <td>
                                                    {mobileOne.mobile.battery.reverseCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.battery.reverseCharging != null ?

                                                <td>
                                                    {mobileTwo.mobile.battery.reverseCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.battery.reverseCharging != null ?

                                                <td>
                                                    {mobileThree.mobile.battery.reverseCharging}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                 {/* Technical */}
                                 <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Technical</th>

                                </tr>
                                {/* OS */}
                                <tr>
                                    <th scope="row">OS</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.os != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.os}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.os != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.os}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.os != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.os}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* Processor */}
                                <tr>
                                    <th scope="row">Processor</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.chipset != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.chipset}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.chipset != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.chipset}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.chipset != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.chipset}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* cpu */}
                                <tr>
                                    <th scope="row">CPU</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.cpu != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.cpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.cpu != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.cpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.cpu != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.cpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* coreDetails */}
                                <tr>
                                    <th scope="row">Core Details</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.coreDetails != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.coreDetails}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.coreDetails != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.coreDetails}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.coreDetails != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.coreDetails}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* gpu */}
                                <tr>
                                    <th scope="row">GPU</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.gpu != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.gpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.gpu != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.gpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.gpu != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.gpu}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* ipRating */}
                                <tr>
                                    <th scope="row">IP Rating</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.ipRating != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.ipRating != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.ipRating != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* java */}
                                <tr>
                                    <th scope="row">JAVA</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.java != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.java}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.java != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.java}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.java != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.java}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* browser */}
                                <tr>
                                    <th scope="row">Browser</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.technical.browser != null ?

                                                <td>
                                                    {mobileOne.mobile.technical.browser}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.technical.browser != null ?

                                                <td>
                                                    {mobileTwo.mobile.technical.browser}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.technical.browser != null ?

                                                <td>
                                                    {mobileThree.mobile.technical.browser}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* Extras */}
                                 <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Extras</th>

                                </tr>

                                {/* gps */}
                                <tr>
                                    <th scope="row">GPS</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.gps != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.gps}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.gps != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.gps}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.gps != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.gps}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* gfingerprintSensorps */}
                                <tr>
                                    <th scope="row">Fingerprint Sensor</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.fingerprintSensor != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.fingerprintSensor}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.fingerprintSensor != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.fingerprintSensor}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.fingerprintSensor != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.fingerprintSensor}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* faceUnlock */}
                                <tr>
                                    <th scope="row">Face Unlock</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.faceUnlock != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.faceUnlock}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.faceUnlock != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.faceUnlock}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.faceUnlock != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.faceUnlock}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* gsensorsps */}
                                <tr>
                                    <th scope="row">Sensors</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.sensors != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.sensors}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.sensors != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.sensors}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.sensors != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.sensors}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* threePFivemmHeadphoneJack */}
                                <tr>
                                    <th scope="row">3.5 mm Jack</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.threePFivemmHeadphoneJack != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.threePFivemmHeadphoneJack}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.threePFivemmHeadphoneJack != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.threePFivemmHeadphoneJack}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.threePFivemmHeadphoneJack != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.threePFivemmHeadphoneJack}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* extra */}
                                <tr>
                                    <th scope="row">Extra</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.extra != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.extra}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.extra != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.extra}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.extra != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.extra}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* waterResistance */}
                                <tr>
                                    <th scope="row">Water Resistance</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.waterResistance != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.waterResistance}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.waterResistance != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.waterResistance}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.waterResistance != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.waterResistance}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* ipRating */}
                                <tr>
                                    <th scope="row">IP Rating</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.ipRating != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.ipRating != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.ipRating != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.ipRating}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* dustResistant */}
                                <tr>
                                    <th scope="row">Dust Resistance</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.dustResistant != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.dustResistant}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.dustResistant != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.dustResistant}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.dustResistant != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.dustResistant}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                {/* extraFeatures */}
                                <tr>
                                    <th scope="row">Extra Features</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.extra.extraFeatures != null ?

                                                <td>
                                                    {mobileOne.mobile.extra.extraFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.extra.extraFeatures != null ?

                                                <td>
                                                    {mobileTwo.mobile.extra.extraFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.extra.extraFeatures != null ?

                                                <td>
                                                    {mobileThree.mobile.extra.extraFeatures}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                                
                                 {/* Multimedia */}
                                 <tr class="table-primary">
                                    <th scope="col" colSpan={size + 1}>Multimedia</th>

                                </tr>

                                {/* email */}
                                <tr>
                                    <th scope="row">Email</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.multimedia.email != null ?

                                                <td>
                                                    {mobileOne.mobile.multimedia.email}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.multimedia.email != null ?

                                                <td>
                                                    {mobileTwo.mobile.multimedia.email}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.multimedia.email != null ?

                                                <td>
                                                    {mobileThree.mobile.multimedia.email}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>

                                 {/* fmRadio */}
                                 <tr>
                                    <th scope="row">FM Radio</th>

                                    {mobileOne && (
                                        <>
                                            {mobileOne.mobile.multimedia.fmRadio != null ?

                                                <td>
                                                    {mobileOne.mobile.multimedia.fmRadio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                    {mobileTwo && (
                                        <>
                                            {mobileTwo.mobile.multimedia.fmRadio != null ?

                                                <td>
                                                    {mobileTwo.mobile.multimedia.fmRadio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}
                                    {mobileThree && (
                                        <>
                                            {mobileThree.mobile.multimedia.fmRadio != null ?

                                                <td>
                                                    {mobileThree.mobile.multimedia.fmRadio}
                                                </td>

                                                :
                                                <td>NA</td>
                                            }
                                        </>
                                    )}

                                </tr>


                               
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>




            {/* {JSON.stringify(mobileOne)}
            <br />
            {JSON.stringify(mobileTwo)}
            <br />
            {JSON.stringify(mobileThree)} */}

        </>
    );
}