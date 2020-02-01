import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lets-react-df1ac.firebaseio.com'
});

export default instance;