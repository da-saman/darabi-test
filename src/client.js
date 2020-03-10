const _API = "http://localhost:3000";

export const Client = {
  login,
  getFames,
  getOneFame
};

function login(username, password) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  return fetch(`${_API}/login`, {
    method: "post",
    body: formData
  })
    .then(checkStatus)
    .then(async response => {
      await response.text().then(text => {
        const textData = text && JSON.parse(text);
        if (textData.data.success) {
          localStorage.setItem(
            "userJWT",
            JSON.stringify(response.headers.get("Authorization"))
          );
          localStorage.setItem("username", username);
        }
      });
    });
}

function getFames(page = 0) {
  return fetch(`${_API}/fames?page=${page}`, {
    withCredentials: true,
    headers: authHeader()
  })
    .then(checkStatus)
    .then(response => {
      return response.text().then(fames => {
        return fames;
      });
    });
}

function getOneFame(id) {
  return fetch(`${_API}/fames/${id}`, {
    withCredentials: true,
    headers: authHeader()
  })
    .then(checkStatus)
    .then(response => {
      return response.text().then(fame => {
        return fame;
      });
    });
}
function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return response;
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function authHeader() {
  // return authorization header with basic auth credentials
  let userJWT = JSON.parse(localStorage.getItem("userJWT"));

  if (userJWT) {
    return { Authorization: "Bearer " + userJWT };
  } else {
    return {};
  }
}
