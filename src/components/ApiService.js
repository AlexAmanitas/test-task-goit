import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://644e6e0d1b4567f4d58747ca.mockapi.io/api';

export async function fetchAllUsers() {
  try {
    const url = `${BASE_URL}/users`;
    Notiflix.Loading.standard();
    const allUsers = await axios.get(url);
    Notiflix.Loading.remove();
    console.log(allUsers.data);
    return allUsers.data;
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
}
