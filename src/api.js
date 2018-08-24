import axios from 'axios';

export default {
  user: {
    login: (credentials) => axios.post('http://localhost:8888/api/auth', { credentials }).then(res => res.data.user)
  }
};