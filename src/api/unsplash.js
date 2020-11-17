import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID GzJs4I_YZ8lO0PPQPnfcbfADAPwi8WgXDV6zkE1863o'
  }
});
