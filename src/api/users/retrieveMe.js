import { getToken } from "./localStorageToken"
const axios = require("axios")

/**
 *
 * @returns {{object:"account",_id:{string},mail:{string},firstname:{string},lastname:{string},role:{string},active:{number},created:{string},modified:{string}}}: acct object for user
 */

export const retrieveMe = () => {
  const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    url: `user/me`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    }
  }
  return axios(config)
    .then(res => {
      return res.data // returning the account
    })
    .catch(res => res)
}
