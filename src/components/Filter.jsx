import React, { useEffect, useState } from 'react';
import { Accordion, Card } from "react-bootstrap";
import { useHistory } from 'react-router';




export default function Filter() {


    //brands 

    const [brands, setBrands] = useState({
        xiaomi: false,
        samsung: false,
        realme: false,
        oppo: false,
        vivo: false,
        oneplus: false,
        poco: false,
        apple: false,
    });

    const brandChange = (event) => {
        setBrands({ ...brands, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };

    const history = useHistory();
    const params = new URLSearchParams();

    function searchQueryBrand() {
        let query = "";
        if (brands.xiaomi) {
            query += "Xiaomi,";

        }
        if (brands.samsung) {
            query += "Samsung,";

        }
        if (brands.realme) {
            query += "Realme,";

        }
        if (brands.vivo) {
            query += "Vivo,";

        }

        if (brands.oppo) {
            query += "OPPO,";

        }
        if (brands.oneplus) {
            query += "OnePlus,";

        }
        if (brands.poco) {
            query += "Poco,";

        }
        if (brands.apple) {
            query += "Apple,";

        }
        //if nothing is selected delete query from url
        if (query) {
            //remove last ,
            query = query.slice(0, -1);

            //add query parameters
            params.append("brand", query)
            // history.push({ search: params.toString() })
            // history.push("mobiles?brand=" + query);
            // console.warn("Query=" + query);
            // console.warn("Params = " + params.toString())
        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("brand")
            history.push("mobiles");
        }
    }
    const {
        xiaomi,
        samsung,
        realme,
        oppo,
        vivo,
        oneplus,
        poco,
        apple,
    } = brands;
    //availability
    const [available, setAvailable] = useState({
        upcoming: false,
        launched: false
    });

    const availabilityChange = (event) => {
        setAvailable({ ...available, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };



    // const history = useHistory();
    function searchQueryAvailablility() {
        let query = "";
        if (upcoming) {
            query += "true";
        }
        if (launched) {
            query += "false";
        }
        // const params = new URLSearchParams();

        //if nothing is selected or both are selected delete query from url
        if (query) {

            //if anyone selected

            //add query parameters
            params.append("upcoming", query)

            // history.push({ search: params.toString() })
            //    history.push("mobiles?upcoming=" + query);


            //if both are selected 
            if (query == "truefalse") {
                params.delete("upcoming")
                query = "";
                history.push("mobiles");
            }

        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("upcoming")
            // history.push("mobiles")
            history.push("mobiles");
        }

    }
    const {
        upcoming,
        launched
    } = available;



    //rearCamera

    const [rearCamera, setRearCamera] = useState({
        fiveRC: false,
        thirteenRC: false,
        sixteenRC: false,
        twentyRC: false,
        fourtyeightRC: false,
        sixtyfourRC: false,

    });

    const rearCameraChange = (event) => {
        setRearCamera({ ...rearCamera, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };


    function searchQueryRearCamera() {
        let query = "";
        if (fiveRC) {
            query = 5;

        }
        if (thirteenRC) {
            query = 13;

        }
        if (sixteenRC) {
            query = 16;

        }
        if (twentyRC) {
            query = 20;

        }
        if (fourtyeightRC) {
            query = 48;

        }
        if (sixtyfourRC) {
            query = 64;

        }
        if (query) {
            //remove last ,


            //add query parameters
            params.append("rearCamera", query)
        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("rearCamera")
            history.push("mobiles");
        }
    }
    const {
        fiveRC,
        thirteenRC,
        sixteenRC,
        twentyRC,
        fourtyeightRC,
        sixtyfourRC,
    } = rearCamera;

//Front camera

const [frontCamera, setFrontCamera] = useState({
    fiveFC: false,
    eightFC: false,
    twelveFC: false,
    sixteenFC: false,
    twentyFC: false,

});

const frontCameraChange = (event) => {
    setFrontCamera({ ...frontCamera, [event.target.name]: event.target.checked });
};
// const [expanded, setExpanded] = React.useState('panel1');
// const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
// };


function searchQueryFrontCamera() {
    let query = "";
    if (frontCamera.fiveFC) {
        query = 5;

    }
    if (frontCamera.eightFC) {
        query = 8;

    }
    if (frontCamera.twelveFC) {
        query = 12;

    }
    if (frontCamera.sixteenFC) {
        query = 16;

    }
    if (frontCamera.twentyFC) {
        query = 20;

    }

    if (query) {
        //remove last ,


        //add query parameters
        params.append("frontCamera", query)
    } else {
        console.warn("Nothing selected");
        //delete query parameters
        params.delete("frontCamera")
        history.push("mobiles");
    }
}

const {
    fiveFC,
    eightFC,
    twelveFC,
    sixteenFC,
    twentyFC,
} = frontCamera;


//Display amoled IPS
const [display, setDisplay] = useState({
    amoled: false,
    ips: false
});

const displayChange = (event) => {
    setDisplay({ ...display, [event.target.name]: event.target.checked });
};
// const [expanded, setExpanded] = React.useState('panel1');
// const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
// };



// const history = useHistory();
function searchQueryDisplay() {
    let query = "";
    if (amoled) {
        query += "amoled";
    }
    if (ips) {
        query += "ips";
    }
    // const params = new URLSearchParams();

    //if nothing is selected or both are selected delete query from url
    if (query) {

        //if anyone selected

        //add query parameters
        params.append("display", query)

        // history.push({ search: params.toString() })
        //    history.push("mobiles?upcoming=" + query);


        //if both are selected 
        if (query == "amoledips") {
            params.delete("display")
            query = "";
            history.push("mobiles");
        }

    } else {
        console.warn("Nothing selected");
        //delete query parameters
        params.delete("display")
        // history.push("mobiles")
        history.push("mobiles");
    }

}
const {
    amoled,
    ips
} = display;





//global value change handler
    useEffect(() => {
        console.log(brands);
        console.log(available);
        console.log(rearCamera);
        console.log(frontCamera);
        console.log(display);
        URLConroller();
    }, [available, brands, rearCamera,frontCamera, display]);

    //filter url controller
    function URLConroller() {

        searchQueryBrand();
        searchQueryAvailablility();
        searchQueryRearCamera();
        searchQueryFrontCamera();
        searchQueryDisplay();
        history.push({ search: params.toString() })


    }


    return (
        <>
            {getBrandUI()}
            {getFrontCameraUI()}
            {getRearCameraUI()}
            {getDisplayUI()}
            {getAvalabilityUI()}
        </>

    );

    function getBrandUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Brands
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={apple} checked={apple} onChange={brandChange} name="apple" />
                                    <span class="form-check-label">
                                        Apple
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={samsung} onChange={brandChange} name="samsung" />
                                    <span class="form-check-label">
                                        Samsung
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={realme} onChange={brandChange} name="realme" />
                                    <span class="form-check-label">
                                        Realme
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={poco} onChange={brandChange} name="poco" />
                                    <span class="form-check-label">
                                        POCO
                                    </span>
                                </label>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={xiaomi} onChange={brandChange} name="xiaomi" />
                                    <span class="form-check-label">
                                        Xiaomi
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={oppo} onChange={brandChange} name="oppo" />
                                    <span class="form-check-label">
                                        OPPO
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={vivo} onChange={brandChange} name="vivo" />
                                    <span class="form-check-label">
                                        VIVO
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={oneplus} onChange={brandChange} name="oneplus" />
                                    <span class="form-check-label">
                                        OnePlus
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }

    function getAvalabilityUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Availability
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={upcoming} checked={upcoming} onChange={availabilityChange} name="upcoming" />
                                    <span class="form-check-label">
                                        Upcoming
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={launched} checked={launched} onChange={availabilityChange} name="launched" />
                                    <span class="form-check-label">
                                        Launched
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }


    function getRearCameraUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Rear Camera
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fiveRC} checked={fiveRC} onChange={rearCameraChange} name="fiveRC" />
                                    <span class="form-check-label">
                                        5 MP & Above
                                    </span>
                                </label>
                                
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={thirteenRC} onChange={rearCameraChange} name="thirteenRC" />
                                    <span class="form-check-label">
                                        13 MP & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixteenRC} onChange={rearCameraChange} name="sixteenRC" />
                                    <span class="form-check-label">
                                        16 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={twentyRC} onChange={rearCameraChange} name="twentyRC" />
                                    <span class="form-check-label">
                                        20 MP & ABOVE
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={fourtyeightRC} onChange={rearCameraChange} name="fourtyeightRC" />
                                    <span class="form-check-label">
                                        48 MP & ABOVE
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixtyfourRC} onChange={rearCameraChange} name="sixtyfourRC" />
                                    <span class="form-check-label">
                                        64 MP & ABOVE
                                    </span>
                                </label>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }

    function getFrontCameraUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Front Camera
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fiveFC} checked={fiveFC} onChange={frontCameraChange} name="fiveFC" />
                                    <span class="form-check-label">
                                        5 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={eightFC} checked={eightFC} onChange={frontCameraChange} name="eightFC" />
                                    <span class="form-check-label">
                                        8 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={twelveFC} onChange={frontCameraChange} name="twelveFC" />
                                    <span class="form-check-label">
                                        12 MP & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixteenFC} onChange={frontCameraChange} name="sixteenFC" />
                                    <span class="form-check-label">
                                        16 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={twentyFC} onChange={frontCameraChange} name="twentyFC" />
                                    <span class="form-check-label">
                                        20 MP & ABOVE
                                    </span>
                                </label>
                               

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }


    function getDisplayUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Display
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={amoled} checked={amoled} onChange={displayChange} name="amoled" />
                                    <span class="form-check-label">
                                        Amoled
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={ips} checked={ips} onChange={displayChange} name="ips" />
                                    <span class="form-check-label">
                                        IPS
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }
}
