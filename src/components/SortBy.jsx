import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';


export default function SortBy({ setSortML }) {

    const [sortTemp, setSortTemp] = useState("Sort By");

    const sortChangeTemp = (event) => {
        setSortTemp(event.target.value);
        event.preventDefault();
    };

    useEffect(() => {
        setSortML(sortTemp);

    }, [sortTemp])


    return (
        <div>
            <select class="btn btn-light float-end mb-1"  value={sortTemp} onChange={sortChangeTemp} >
                <option name="sort">Sort By</option>
                <option name="sort">Price Low to High</option>
                <option name="sort">Price High to Low</option>
                <option name="sort">Newest First</option>
                <option name="sort">SpecScore Low to High</option>
                <option name="sort">SpecScore High to Low</option>
            </select>





        </div>

    );
}