import { URL_BASE } from '../configServices'

async function login (credentials) {
    const URL = `${URL_BASE}/auth/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    const res = await fetch(URL, options)
    return await res.json()
  }

  async function create (data){
    const URL = `${URL_BASE}/auth/register`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    const res = await fetch(URL, options)
    return await res.json()
  }

  export {
    login,
    create
  }