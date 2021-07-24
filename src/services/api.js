import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_Server1}`
  // baseURL: `http://localhost:8080/`
  , headers: {
    Authorization: `Bearer ${process.env.REACT_APP_Spring_token}`
  }
});

