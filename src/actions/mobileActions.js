import {
  GET_MOBILES,
  GET_MOBILE,
  GET_SUGGESTIONS,
} from "../constants/mobileConstatnts";
import axios from "axios";
import api from "../services/api";


axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbWl0IiwiZXhwIjoxNjU2NjczOTY2LCJpYXQiOjE2MjUxMzc5NjZ9.r5p0sULytCtqPKuUT5pg3L0yZJusYLhZ7hJdh3l8ZqeDWbbNDjP1g4oX6RBmNpB-Go9Q2zUvVH0ZmdIz3P07sQ` 

// get all MOBILEs

export const getMobiles = ({
  search,
  brand,
  page,
}) => async (dispatch) => {
  try {
    const query = `mobileservice?brand=${brand}&search=${search}&page=${page}`;
    console.warn("query:==>" + query);
    const { data } = await api.get(query);
    console.warn("within action:GET_MOBILES :->" + data.size)
    dispatch({
      type: GET_MOBILES,
      payload: data,

    });
  } catch (error) {
    console.error("within action:GET_MOBILES error:->" + error)
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
    .catch((error) => {
      console.error("within action:GET_MOBILE error:->" + error)
    });




};




// get SUGGESTIONS
export const getSuggestions = (title) => async (dispatch) => {
  const result = await axios.get(`https://mobileslove-backend-spring.herokuapp.com/suggestion?title=${title}`);
  // const result = await axios.get(`http://localhost:8080/suggestion?title=${title}`);
  console.warn("within action: GET_SUGGESTIONS" + title)
  dispatch({
    type: GET_SUGGESTIONS,
    payload: result.data,
  });
};


