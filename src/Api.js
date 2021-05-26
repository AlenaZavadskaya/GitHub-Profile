const URL = "https://api.github.com";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const getUserInfo = (username) => {
  return fetch(`${URL}/users/${username}`, {
    method: "GET",
    headers: headers,
  }).then((res) => getResponse(res));
};

export const getUserRepos = (username, pageNumber = 1) => {
  return fetch(`${URL}/users/${username}/repos?per_page=4&page=${pageNumber}`, {
    method: "GET",
    headers: headers,
  }).then((res) => getResponse(res));
};
