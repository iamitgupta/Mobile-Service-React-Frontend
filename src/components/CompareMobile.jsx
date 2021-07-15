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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <table class="table">
                            <thead class="thead bg-primary text-light ">
                                <tr>

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
                            <tbody>
                                <tr>

                                    {mobileOne && (
                                        <td>
                                            {mobileOne.mobile.title != null ?
                                                <img src={mobileOne.mobile.images[0]}
                                                    alt="Card image cap" height="100px" width="70px"></img>
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}
                                    {mobileTwo && (
                                        <td>
                                            {mobileTwo.mobile.title != null ?
                                                <img src={mobileTwo.mobile.images[0]}
                                                    alt="Card image cap" height="100px" width="70px"></img>
                                                :
                                                <>NA</>
                                            }
                                        </td>
                                    )}
                                    {mobileThree && (
                                        <td>
                                            {mobileThree.mobile.title != null ?
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
                                    <th scope="col" colspan={size + 1}>Overall</th>

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
                                    <th scope="col" colspan={size + 1}>General</th>

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
                                    <th scope="col" colspan={size + 1}>Camera</th>

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