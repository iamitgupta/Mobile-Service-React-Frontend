import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbWl0IiwiZXhwIjoxNjU2NjczOTY2LCJpYXQiOjE2MjUxMzc5NjZ9.r5p0sULytCtqPKuUT5pg3L0yZJusYLhZ7hJdh3l8ZqeDWbbNDjP1g4oX6RBmNpB-Go9Q2zUvVH0ZmdIz3P07sQ"

export default axios.create({
  baseURL: `https://mobileslove-backend-spring.herokuapp.com/`
  // baseURL: `http://localhost:8080/`
  , headers: {
    Authorization: `Bearer ${token}`
  }
});