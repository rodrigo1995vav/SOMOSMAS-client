import axios from "axios";


//TODO here we should put the base url from the server side
axios.defaults.baseURL = "baseurlfromserverside"

axios.defaults.headers.get['Accept'] = 'application/json'   
axios.defaults.headers.post['Accept'] = 'application/json'  

const token = localStorage.getItem('token')?localStorage.getItem('token'):localStorage.setItem('token',null)

export function registerUser(body,path) {
  return axios.post(path, body);
}

export function loginUser(body,path) {
  return axios.post(path, body);
}

export function loginUser (body, path) {
    try {
        return async function (){
          const response = await axios.post(path, body);
          localStorage.setItem('token', response.data.token);
        }         
    } catch (err) {
        console.log(err)
    }
  }


  export function getPrivate (path){
    return axios.get(path,{
        headers: {'Authorization':`Bearer ${token}`}
    })
  }
  
  export function postPrivate (path, body){
    return axios.post(path,body,{
        headers: {'Authorization':`Bearer ${token}`}
    })
  }

  export function putPrivate(path , id, data) {
    return axios.put(path + id, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
  

