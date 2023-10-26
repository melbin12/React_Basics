import axios from "axios";

// eslint-disable-next-line no-undef
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
});

export default instance