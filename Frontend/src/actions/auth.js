export const SET_TOKEN = 'SET_TOKEN';
export const LOGIN = 'LOGIN';

export const setToken = (token)=>({
  type:SET_TOKEN,
  token
})

export const login = (email,password)=>({
  type:LOGIN,
  email,
  password
})