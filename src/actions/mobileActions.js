import {
  GET_MOBILES,
  GET_MOBILE,
  CREATE_MOBILE,
  UPDATE_MOBILE,
  DELETE_MOBILE,
  GET_SUGGESTIONS,
} from "../constants/mobileConstatnts";
import axios from "axios";

import api from "../services/api";

// get all MOBILEs

export const getMobiles = ({
  search,
  brand,
  page,
}) => async (dispatch) => {
  try{
    const query = `mobileservice?brand=${brand}&search=${search}&page=${page}`;
    console.warn("query:==>"+query);
  const {data} = await api.get(query);
  console.warn("within action:GET_MOBILES :->"+data.size)
  dispatch({
    type: GET_MOBILES,
    payload:data,
 
  });
}catch (error) {
  console.error("within action:GET_MOBILES error:->"+error)
}


};


   

// get a MOBILE
export const getMobile = (mobileId) => async (dispatch) => {
//   try{
//     const queryMobile = `getmobile/${mobileId}`;
//     console.warn("query:==>"+queryMobile);
//   const {data} = await axios.get(`getmobile/2058`);
//   console.warn("within action:GET_MOBILE :->"+data)
//   dispatch({
//     type: GET_MOBILE,
//     payload: data,
//   });
// }catch (error) {
//   console.error("within action:GET_MOBILE error:->"+error)
// }
const queryMobile = `getmobile/${mobileId}`;
await api.get(queryMobile)
  .then((response) => {
    console.log(response.data);
    dispatch({
          type: GET_MOBILE,
          payload: response.data,
        });
  })
  .catch((error)=>{
    console.error("within action:GET_MOBILE error:->"+error)
  });
  
  


};
// create a MOBILE
export const createMobile = (MOBILE) => async (dispatch) => {
  const result = await axios.MOBILE(
    "https://jsonplaceholder.typicode.com/MOBILEs",
    MOBILE
  );

  dispatch({
    type: CREATE_MOBILE,
    payload: result.data,
  });
};

// update a MOBILE
export const updateMobile = (MOBILE) => async (dispatch) => {
  const result = await axios.put(
    `https://jsonplaceholder.typicode.com/MOBILEs/${MOBILE.id}`,
    MOBILE
  );
  dispatch({
    type: UPDATE_MOBILE,
    payload: result.data,
  });
};

// delete a MOBILE
export const deleteMobile = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/MOBILEs/${id}`);
  dispatch({
    type: DELETE_MOBILE,
    payload: id,
  });

};

 // get SUGGESTIONS
 export const getSuggestions = (title) => async (dispatch) => {
  // const result = await axios.get(`https://mobileslove-backend-spring.herokuapp.com/suggestion?title=${title}`);
  const result = await axios.get(`http://localhost:8080/suggestion?title=${title}`);
  console.warn("within action: GET_SUGGESTIONS"+title)
  dispatch({
    type: GET_SUGGESTIONS,
    payload: result.data,
  });
};


