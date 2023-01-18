import axios from 'axios';

export default axios.create({
    baseURL: 'https://sparksyms.com/rimz/api'
    //baseURL: 'http://localhost:8000/api'
});
