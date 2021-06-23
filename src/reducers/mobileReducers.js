import {
    GET_MOBILES,
    GET_MOBILE,
    CREATE_MOBILE,
    UPDATE_MOBILE,
    DELETE_MOBILE,
    GET_SUGGESTIONS,
  } from "../constants/mobileConstatnts";
  
  const initialState = {
    mobiles: [],
    mobile: null,
  };
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_MOBILES:
          console.warn("GET_MOBILES called");
        return {
          ...state,
          mobiles: payload,
        };
      case CREATE_MOBILE:
        console.log(payload);
        return {
          ...state,
          mobiles: [payload, ...state.mobiles],
        };
      case GET_MOBILE:
        console.warn("GET_MOBILE called reducers");
        return {
          ...state,
          mobile: payload,
        };
      case UPDATE_MOBILE:
        return {
          ...state,
          mobiles: state.mobiles.map((mobileItem) =>
          mobileItem.id == payload.id ? payload : mobileItem
          ),
        };
      case DELETE_MOBILE:
        return {
          ...state,
          mobiles: state.mobiles.filter((mobileItem) => mobileItem.id != payload),
        };
        case GET_SUGGESTIONS:
          console.warn("GET_SUGGESTIONS called");
        return {
          ...state,
          suggestions: payload,
        };
      default:
        return state;
    }
  };
  