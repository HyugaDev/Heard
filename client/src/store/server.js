import axios from "axios";

const post = (url, params) =>
  axios
    .post(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const get = (url) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const patch = (url, params) =>
  axios
    .patch(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
        return Promise.reject(response);
    });

const Delete = (url) =>
  axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

export { post, get, Delete, patch };