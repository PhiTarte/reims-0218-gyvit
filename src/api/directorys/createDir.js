import { getToken } from "../users/localStorageToken"
const axios = require("axios")

const config = {
  url: "storage/directorys",
  baseURL: "https://dev.gyvit.io/api/",
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
}

export const createDir = (name, destination) =>
  axios({
    ...config,
    data: JSON.stringify({ name, destination })
  })
