import axios from 'axios';


export const $api = axios.create({
  baseURL: 'https://e-com-test-o4zbca2wo-erlankg0s-projects.vercel.app/api',
  headers: {},
});