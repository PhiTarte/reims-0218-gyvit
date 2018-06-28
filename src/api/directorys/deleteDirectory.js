import { getToken } from "../users/localStorageToken"

export const deleteDirectory = (dirId, dirName) =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${dirId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name: dirName })
  }).then(res => res.json())
