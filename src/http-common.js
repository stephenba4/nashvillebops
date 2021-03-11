import axios from 'axios';

export default axios.create({
  baseURL: 'https://nashvillebopsservice-hsft7.ondigitalocean.app/',
  // baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
