import { SortAscendingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';


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
        <>
            <select class="btn btn-light float-end" value={sortTemp} onChange={sortChangeTemp} >
                <option name="sort">Sort By</option>
                <option name="sort">Price Low to High</option>
                <option name="sort">Price Hight to Low</option>
                <option name="sort">Newest First</option>
                <option name="sort">SpecScore Low to High</option>
                <option name="sort">SpecScore High to Low</option>
            </select>


        </>

    );
}