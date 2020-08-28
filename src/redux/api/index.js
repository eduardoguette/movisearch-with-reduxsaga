// import axios from "axios";
const baseUrl = "http://www.omdbapi.com/?apiKey=227808bb";

export const apiCall = (url, method) => {
  return fetch(baseUrl + url, {
    method,
  }).then(response => response.json())
};
