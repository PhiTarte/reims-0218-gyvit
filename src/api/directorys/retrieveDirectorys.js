export const retrieveDir = (_id = "dir_kL9D9lMe3ndN90eOl2kN") =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyOTkyNDQ3OH0.VlEg1kHkXr7xnQmy1TFcw7lNRLvMLtUDY9bpTMYA7dA"
    }
  }).then(res => res.json())
