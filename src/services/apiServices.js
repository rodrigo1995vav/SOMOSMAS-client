import axios from "axios";


//TODO here we should put the base url from the server side
axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_URL_API;

axios.defaults.headers.get["Accept"] = "application/json";
//axios.defaults.headers.post["Accept"] = "application/json";

const token = localStorage.getItem("token")



export function registerUser(body, path) {
  return axios.post(path, body);
}

export function loginUser(path, body) {
  axios
    .post(path, body)
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getPrivate(path) {
  const token = localStorage.getItem("token")
  console.log(token)
  return axios.get(path, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function postPrivate(path, body) {
  const token = localStorage.getItem("token")
  return axios.post(path, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function putPrivate(path, id, data) {
  const token = localStorage.getItem("token")
  return axios.put(path + id, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getPublic(path) {
  return axios.get(path);
}

export function postPublic(path, body) {
  console.log(path)
  return axios.post(path, body);
}

export async function  deletePrivate(path)
{
  const token = localStorage.getItem("token")
  return axios.delete(path , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
})
}