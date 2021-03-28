import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'development')
    ? 'https://nashvillebopsservice-hsft7.ondigitalocean.app/'
    : 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
