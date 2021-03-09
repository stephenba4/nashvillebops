import axios from 'axios';

export default axios.create({
  baseURL: 'https://nashvillebopsservice-hsft7.ondigitalocean.app/',
  headers: {
    'Content-type': 'application/json',
  },
});
