import axios from 'axios';

export default axios.create({
  // baseURL: `https://mobileslove-backend-spring.herokuapp.com/`
  baseURL: `http://localhost:8080/`
});