import axios from 'axios'

export const baseURL = 'https://43.139.171.246:3000'
// export const baseURL = 'http://127.0.0.1:3000'

const fetch = axios.create({
  timeout: 10000,
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-chche'
  }
})

export const getAlbum = ()=>{
   return fetch.get('/album/')
}

export const addAlbum = (params) =>{
  return fetch.post('/album/add/', params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getStory = ()=>{
  return fetch.get('/story/')
}

export const getHome = ()=>{
  return fetch.get('/home/')
}
