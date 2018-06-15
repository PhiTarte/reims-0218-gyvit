import { getToken } from "./localStorageToken"

const request = {
  method: "get",
  headers: new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  })
}

/**
 *
 * @returns: acct object for user
 */

export const retrieveMe = () =>
  fetch("https://dev.gyvit.io/api/user/me", request)
    .then(res => res.json())
    .then(user => {
      return user
    })
