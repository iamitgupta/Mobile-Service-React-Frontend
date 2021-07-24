import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { AutoComplete,  Input } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from '@ant-design/icons';
import api from '../services/api';

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [suggestions, setSuggestions] = useState();
  const history = useHistory();

  const active = true;


  console.log("current path : " + history.location.pathname)


  useEffect(() => {
    getSuggestions(title);
    console.warn("getSuggestions : " + suggestions);

  }, [title]);


  async function getSuggestions(title) {
    try {
        const query = `suggestion?title=${title}`;
        // console.warn("Query : " + query);
        const response = await api.get(query);

        setSuggestions(response.data);
        // console.log("suggestions api call : " + response.data);

    } catch (error) {
        console.error(error);
    }

}


  function change(value) {
    const params = new URLSearchParams()

    if (value) {
      params.append("search", value)
    } else {
      params.delete("search")
    }
    // history.push({search: params.toString()})


    if (history.location.pathname == "/mobiles") {
      //on mobiles page so /mobiles already there so forward to http://localhost:3000//mobiles?search=
      history.push("?" + params.toString())
    } else {
      //on other page only a step ahead eg.. http://localhost:3000/mobile/ or http://localhost:3000/deals/
      // so it back to http://localhost:3000/ then forward to http://localhost:3000//mobiles?search=
      history.push("/mobiles?" + params.toString())
    }

  }
  function onInputChange(event, value, reason) {
    console.log("change     value:" + event + " : " + value + " :  " + reason);
    if (value && value.length > 1)
      setTitle(value);
  }


  return (
   
      <AutoComplete
        dataSource={suggestions}
        style={{ width: "80vw" }}
        onSelect={change}
        onSearch={setTitle}
        placeholder="Search mobiles, brands, offers"

        allowClear={active}
      >
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
  );
}



export default SearchBar;