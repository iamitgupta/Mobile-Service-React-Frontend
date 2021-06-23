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



    //reaarCamera

    const [rearCamera, setRearCamera] = useState({
        five: false,
        thirteen: false,
        sixteen: false,
        twenty: false,
        fourtyeight: false,
        sixtyfour: false,

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
        if (five) {
            query = 5;

        }
        if (thirteen) {
            query = 13;

        }
        if (sixteen) {
            query = 16;

        }
        if (twenty) {
            query = 20;

        }
        if (fourtyeight) {
            query = 48;

        }
        if (sixtyfour) {
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
        five,
        thirteen,
        sixteen,
        twenty,
        fourtyeight,
        sixtyfour,
    } = rearCamera;


    useEffect(() => {
        console.log(brands);
        console.log(available);
        console.log(rearCamera);
        URLConroller();
    }, [available, brands, rearCamera]);

    //filter url controller
    function URLConroller() {

        searchQueryBrand();
        searchQueryAvailablility();
        searchQueryRearCamera();
        history.push({ search: params.toString() })


    }


    return (
        <>
            {getBrandUI()}
            {getAvalabilityUI()}
            {getRearCameraUI()}
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
                                    <input class="form-check-input" type="checkbox" value={five} checked={five} onChange={rearCameraChange} name="five" />
                                    <span class="form-check-label">
                                        5 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={thirteen} onChange={rearCameraChange} name="thirteen" />
                                    <span class="form-check-label">
                                        13 MP & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixteen} onChange={rearCameraChange} name="sixteen" />
                                    <span class="form-check-label">
                                        16 MP & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={twenty} onChange={rearCameraChange} name="twenty" />
                                    <span class="form-check-label">
                                        20 MP & ABOVE
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={fourtyeight} onChange={rearCameraChange} name="fourtyeight" />
                                    <span class="form-check-label">
                                        48 MP & ABOVE
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixtyfour} onChange={rearCameraChange} name="sixtyfour" />
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
}
