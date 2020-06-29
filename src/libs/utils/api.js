import axios from 'axios';

const callAPI = async (method, url, data) => {
  try {
    const { email, password } = data;
    const URL = process.env.REACT_APP_BASE_URL + url;
    const res = await axios({
      method,
      url: URL,
      data: {
        email,
        password,
      },
    });
    return res.data;
  } catch (error) {
    return { message: error.message, status: 'error' };
  }
};

export default callAPI;
