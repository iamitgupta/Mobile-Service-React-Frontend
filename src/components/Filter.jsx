import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Accordion, Card } from "react-bootstrap";
import { useHistory } from 'react-router';





export default function Filter({sort}) {

    const history = useHistory();
    const params = new URLSearchParams();

    //sort By
    function searchQuerySort() {
        let query = "";
        //date-> dateASC, dateDESC
			//date-> priceASC, priceDESC
			//date-> specScoreASC, specScoreDESC
        if (sort!="Sort By") {
           
            if(sort=="Price Low to High"){
                query="priceASC"
            }
            if(sort=="Price Hight to Low"){
                query="priceDESC"
            }
            if(sort=="Newest First"){
                query="dateDESC"
            }
            if(sort=="SpecScore Low to High"){
                query="specScoreASC"
            }
            if(sort=="SpecScore High to Low"){
                query="specScoreDESC"
            }


        }
        if (query) {

            params.append("sort", query)   
        } else {
            console.warn("sort nothing  selected");
            //delete query parameters
            params.delete("sort")
            // history.push("mobiles")
            history.push("mobiles");
        }

    }

    

    //price

    const [priceMin, setPriceMin] = useState("Min");
    const [priceMax, setPriceMax] = useState("Max");

    const priceMinChange = (event) => {
        setPriceMin(event.target.value);
    };

    const priceMaxChange = (event) => {
        setPriceMax(event.target.value);
    };

    function searchQueryPriceMin() {
        let query = "";
        if (priceMin!="Min") {
            query =priceMin;
        }
        if (query) {

            params.append("priceLow", query)   
        } else {
            console.warn("priceLow Min  selected");
            //delete query parameters
            params.delete("priceLow")
            // history.push("mobiles")
            history.push("mobiles");
        }

    }

    function searchQueryPriceMax() {
        let query = "";
        if (priceMax!="Max") {
            query =priceMax;
        }
        if (query) {

            params.append("priceHigh", query)   
        } else {
            console.warn("priceHigh Max  selected");
            //delete query parameters
            params.delete("priceHigh")
            // history.push("mobiles")
            history.push("mobiles");
        }

    }



   


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










    //Screen Size 

    const [screenSize, setScreenSize] = useState({
        fourBelowSC: false,
        fourToFiveSC: false,
        fiveToSixSC: false,
        sixAbove: false,
    });

    const screenSizeChange = (event) => {
        setScreenSize({ ...screenSize, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };



    function searchQueryScreenSize() {
        let query = "";
        if (screenSize.fourBelowSC) {
            query += "4 inch Below,";

        }

        if (screenSize.fourToFiveSC) {
            query += "4 inch - 5 inch,";

        }

        if (screenSize.fiveToSixSC) {
            query += "5 inch - 6 inch,";

        }

        if (screenSize.sixAboveSC) {
            query += "6 inch Above,";

        }

        //if nothing is selected delete query from url
        if (query) {
            //remove last ,
            query = query.slice(0, -1);

            //add query parameters
            params.append("screenSize", query)
            // history.push({ search: params.toString() })
            // history.push("mobiles?brand=" + query);
            // console.warn("Query=" + query);
            // console.warn("Params = " + params.toString())
        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("screenSize")
            history.push("mobiles");
        }
    }
    const {
        fourBelowSC,
        fourToFiveSC,
        fiveToSixSC,
        sixAboveSC,
    } = screenSize;





    //RAM

    const [ram, setRam] = useState({
        twoRAM: false,
        threeRAM: false,
        fourRAM: false,
        sixRAM: false,
        eightRAM: false,


    });

    const ramChange = (event) => {
        setRam({ ...ram, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };


    function searchQueryRam() {
        let query = "";
        if (ram.twoRAM) {
            query = 2;

        }
        if (ram.threeRAM) {
            query = 3;

        }
        if (ram.fourRAM) {
            query = 4;

        }
        if (ram.sixRAM) {
            query = 6;

        }
        if (ram.eightRAM) {
            query = 8;

        }


        if (query) {
            //remove last ,


            //add query parameters
            params.append("ram", query)
        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("ram")
            history.push("mobiles");
        }
    }

    const {
        twoRAM,
        threeRAM,
        fourRAM,
        sixRAM,
        eightRAM,
    } = ram;



    //OS Android , iOS
    const [os, setOs] = useState({
        android: false,
        ios: false
    });

    const osChange = (event) => {
        setOs({ ...os, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };



    // const history = useHistory();
    function searchQueryOs() {
        let query = "";
        if (os.android) {
            query += "Android";
        }
        if (os.ios) {
            query += "iOS";
        }
        // const params = new URLSearchParams();

        //if nothing is selected or both are selected delete query from url
        if (query) {

            //if anyone selected

            //add query parameters
            params.append("os", query)

            // history.push({ search: params.toString() })
            //    history.push("mobiles?upcoming=" + query);


            //if both are selected 
            if (query == "AndroidiOS") {
                params.delete("os")
                query = "";
                history.push("mobiles");
            }

        } else {
            console.warn("Nothing selected");
            //delete query parameters
            params.delete("os")
            // history.push("mobiles")
            history.push("mobiles");
        }

    }
    const {
        android,
        ios
    } = os;



    //Inbuilt memory

    const [inbuiltMemory, setInbuiltMemory] = useState({
        thirtytwoIM: false,
        sixtyfourIM: false,
        onetwentyeightIM: false,
        twofiftysixIM: false,



    });

    const inbuiltMemoryChange = (event) => {
        setInbuiltMemory({ ...inbuiltMemory, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };


    function searchInbuiltMemory() {
        let query = "";
        if (inbuiltMemory.thirtytwoIM) {
            query = 32;
        }
        if (inbuiltMemory.sixtyfourIM) {
            query = 64;
        }
        if (inbuiltMemory.onetwentyeightIM) {
            query = 128;
        }
        if (inbuiltMemory.twofiftysixIM) {
            query = 256;
        }


        if (query) {
            //remove last ,


            //add query parameters
            params.append("inbuiltMemory", query)
        } else {
            console.warn("inbuiltMemory Nothing selected");
            //delete query parameters
            params.delete("inbuiltMemory")
            history.push("mobiles");
        }
    }

    const {
        thirtytwoIM,
        sixtyfourIM,
        onetwentyeightIM,
        twofiftysixIM,
    } = inbuiltMemory;


    //Battery

    const [battery, setBattery] = useState({
        twentyfiveB: false,
        thirtyB: false,
        fourtyB: false,
        fiftyB: false,



    });

    const batteryChange = (event) => {
        setBattery({ ...battery, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };


    function searchQueryBattery() {
        let query = "";
        if (battery.twentyfiveB) {
            query = 2500;
        }
        if (battery.thirtyB) {
            query = 3000;
        }
        if (battery.fourtyB) {
            query = 4000;
        }
        if (battery.fiftyB) {
            query = 5000;
        }



        if (query) {
            //remove last ,


            //add query parameters
            params.append("battery", query)
        } else {
            console.warn("battery Nothing selected");
            //delete query parameters
            params.delete("battery")
            history.push("mobiles");
        }
    }

    const {
        twentyfiveB,
        thirtyB,
        fourtyB,
        fiftyB,
    } = battery;



    //cpu manufacturer 
    //			Apple
    //			HiSilicon
    //			MediaTek
    //			Others
    //			Qualcomm
    //			Samsung

    const [cpu, setCpu] = useState({
        appleCPU: false,
        hisiliconCPU: false,
        mediatekCPU: false,
        qualcommCPU: false,
        samsungCPU: false,
        othersCPU: false,
    });

    const cpuChange = (event) => {
        setCpu({ ...cpu, [event.target.name]: event.target.checked });
    };
    // const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };



    function searchQueryCpu() {
        let query = "";
        if (cpu.appleCPU) {
            query += "Apple,";

        }
        if (cpu.hisiliconCPU) {
            query += "HiSilicon,";

        }
        if (cpu.mediatekCPU) {
            query += "MediaTek,";

        }
        if (cpu.qualcommCPU) {
            query += "Qualcomm,";

        }
        if (cpu.samsungCPU) {
            query += "Samsung,";

        }
        if (cpu.othersCPU) {
            query += "Others,";

        }

        //if nothing is selected delete query from url
        if (query) {
            //remove last ,
            query = query.slice(0, -1);

            //add query parameters
            params.append("cpu", query)
            // history.push({ search: params.toString() })
            // history.push("mobiles?brand=" + query);
            // console.warn("Query=" + query);
            // console.warn("Params = " + params.toString())
        } else {
            console.warn("cpu Nothing selected");
            //delete query parameters
            params.delete("cpu")
            history.push("mobiles");
        }
    }
    const {
        appleCPU,
        hisiliconCPU,
        mediatekCPU,
        qualcommCPU,
        samsungCPU,
        othersCPU,
    } = cpu;



    //.....................................................................................

    //global value change handler
    useEffect(() => {
        console.log(brands);
        console.log(available);
        console.log(rearCamera);
        console.log(frontCamera);
        console.log(screenSize);
        console.log(display);
        console.log(ram);
        console.log(os);
        console.log(inbuiltMemory);
        console.log(battery);
        console.log(cpu);

        console.log(priceMin);
        console.log(priceMax);
        console.log(sort);
        //call the query methods
        searchQueryBrand();
        searchQueryAvailablility();
        searchQueryRearCamera();
        searchQueryFrontCamera();
        searchQueryDisplay();
        searchQueryScreenSize();
        searchQueryRam();
        searchQueryOs();
        searchInbuiltMemory();
        searchQueryBattery();
        searchQueryCpu();
searchQueryPriceMin();
searchQueryPriceMax();
searchQuerySort();

        history.push({ search: params.toString() })


    }, [available, brands, rearCamera, frontCamera, display, screenSize, ram, os, inbuiltMemory, battery, cpu,priceMin,priceMax, sort]);




    return (
        <>
            {getPriceUI()}
            {getBrandUI()}
            {getFrontCameraUI()}
            {getRearCameraUI()}
            {getRamUI()}
            {getInbuiltMemoryUI()}
            {getDisplayUI()}
            {getScreenSizeUI()}
            {getBatteryUI()}
            {getOsUI()}
            {getCpuUI()}
            {getAvalabilityUI()}
        </>

    );




    function getPriceUI() {
        return (
            <>
           
             <Accordion.Toggle as={Card.Header} eventKey="0">
                            Price
                        </Accordion.Toggle>
            <div class="d-flex flex-row mb-2 border">
               
                <div  class="col dropdown">
                    <select class="btn btn-light" value={priceMin} onChange={priceMinChange}>
                        <option  name="priceMin"> Min</option>
                        <option  name="priceMin">3000</option>
                        <option  name="priceMin">5000</option>
                        <option  name="priceMin">6000</option>
                        <option  name="priceMin">8000</option>
                        <option  name="priceMin">10000</option>
                        <option  name="priceMin">12000</option>
                        <option  name="priceMin">15000</option>
                        <option  name="priceMin">20000</option>
                        <option  name="priceMin">25000</option>
                        <option  name="priceMin">30000</option>
                        <option  name="priceMin">35000</option>
                        <option  name="priceMin">50000</option>
                        <option  name="priceMin">70000</option>
                        <option  name="priceMin">90000</option>
                        <option  name="priceMin">100000</option>
                        
                    </select>
                </div>

                <div class="col dropdown">
                    <select class="btn btn-light" value={priceMax} onChange={priceMaxChange} >
                        <option  name="priceMax"> Max</option>
                        <option  name="priceMax">3000</option>
                        <option  name="priceMax">5000</option>
                        <option  name="priceMax">6000</option>
                        <option  name="priceMax">8000</option>
                        <option  name="priceMax">10000</option>
                        <option  name="priceMax">12000</option>
                        <option  name="priceMax">15000</option>
                        <option  name="priceMax">20000</option>
                        <option  name="priceMax">25000</option>
                        <option  name="priceMax">30000</option>
                        <option  name="priceMax">35000</option>
                        <option  name="priceMax">50000</option>
                        <option  name="priceMax">70000</option>
                        <option  name="priceMax">90000</option>
                        <option  name="priceMax">100000</option>
                        
                    </select>
                </div>

            </div>

            </>

        );


    }


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



    function getScreenSizeUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Screen Size
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fourBelowSC} checked={fourBelowSC} onChange={screenSizeChange} name="fourBelowSC" />
                                    <span class="form-check-label">
                                        4 inch & Below
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={fourToFiveSC} onChange={screenSizeChange} name="fourToFiveSC" />
                                    <span class="form-check-label">
                                        4 inch - 5 inch
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={fiveToSixSC} onChange={screenSizeChange} name="fiveToSixSC" />
                                    <span class="form-check-label">
                                        5 inch - 6 inch
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixAboveSC} onChange={screenSizeChange} name="sixAboveSC" />
                                    <span class="form-check-label">
                                        6 inch & Above
                                    </span>
                                </label>






                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }



    function getRamUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            RAM
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={twoRAM} checked={twoRAM} onChange={ramChange} name="twoRAM" />
                                    <span class="form-check-label">
                                        2 GB & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={threeRAM} checked={threeRAM} onChange={ramChange} name="threeRAM" />
                                    <span class="form-check-label">
                                        3 GB & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fourRAM} checked={fourRAM} onChange={ramChange} name="fourRAM" />
                                    <span class="form-check-label">
                                        4 GB & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={sixRAM} onChange={ramChange} name="sixRAM" />
                                    <span class="form-check-label">
                                        6 GB & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={eightRAM} onChange={ramChange} name="eightRAM" />
                                    <span class="form-check-label">
                                        8 GB & Above
                                    </span>
                                </label>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }



    function getOsUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Operating System
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={android} checked={android} onChange={osChange} name="android" />
                                    <span class="form-check-label">
                                        Android
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={ios} checked={ios} onChange={osChange} name="ios" />
                                    <span class="form-check-label">
                                        iOS
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }


    function getBatteryUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Battery
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={twentyfiveB} checked={twentyfiveB} onChange={batteryChange} name="twentyfiveB" />
                                    <span class="form-check-label">
                                        2500 mAH & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={thirtyB} checked={thirtyB} onChange={batteryChange} name="thirtyB" />
                                    <span class="form-check-label">
                                        3000 mAH & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fourtyB} checked={fourtyB} onChange={batteryChange} name="fourtyB" />
                                    <span class="form-check-label">
                                        4000 mAH & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={fiftyB} checked={fiftyB} onChange={batteryChange} name="fiftyB" />
                                    <span class="form-check-label">
                                        5000 mAH & Above
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }

    function getInbuiltMemoryUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Inbuilt Memory
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={thirtytwoIM} checked={thirtytwoIM} onChange={inbuiltMemoryChange} name="thirtytwoIM" />
                                    <span class="form-check-label">
                                        32 GB & Above
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={sixtyfourIM} checked={sixtyfourIM} onChange={inbuiltMemoryChange} name="sixtyfourIM" />
                                    <span class="form-check-label">
                                        64 GB & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={onetwentyeightIM} checked={onetwentyeightIM} onChange={inbuiltMemoryChange} name="onetwentyeightIM" />
                                    <span class="form-check-label">
                                        128 GB & Above
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={twofiftysixIM} checked={twofiftysixIM} onChange={inbuiltMemoryChange} name="twofiftysixIM" />
                                    <span class="form-check-label">
                                        256 GB & Above
                                    </span>
                                </label>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>



            </div>

        );
    }


    function getCpuUI() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            CPU Manufacturer
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value={appleCPU} checked={appleCPU} onChange={cpuChange} name="appleCPU" />
                                    <span class="form-check-label">
                                        Apple
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={qualcommCPU} onChange={cpuChange} name="qualcommCPU" />
                                    <span class="form-check-label">
                                        Qualcomm
                                    </span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={mediatekCPU} onChange={cpuChange} name="mediatekCPU" />
                                    <span class="form-check-label">
                                        MediaTek
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={samsungCPU} onChange={cpuChange} name="samsungCPU" />
                                    <span class="form-check-label">
                                        Samsung
                                    </span>
                                </label>


                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={hisiliconCPU} onChange={cpuChange} name="hisiliconCPU" />
                                    <span class="form-check-label">
                                        HiSilicon
                                    </span>
                                </label>

                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" checked={othersCPU} onChange={cpuChange} name="othersCPU" />
                                    <span class="form-check-label">
                                        Others
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
