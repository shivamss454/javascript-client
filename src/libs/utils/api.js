import axios from 'axios';
import localstorage from 'local-storage';

const callAPI = async (method, url, data) => {
  const { email, password } = data;
  const URL = process.env.REACT_APP_BASE_URL + url;
  // console.log('URL===============', URL);
  await axios({
    method,
    url: URL,
    data: {
      email,
      password,
    },
  }).then((res) => {
    localstorage.set('token', res.data.data);
    console.log(localstorage.get('token'));
  }).catch(() => {
    console.log('Inside catch ');
    return { message: 'this is a Error message ', status: 'error' };
  });
};
export default callAPI;
