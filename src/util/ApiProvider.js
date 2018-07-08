import sha1 from 'js-sha1'

// const api = 'http://localhost:3001'
// TBD root path
const api = 'https://localhost:4000/api/v1'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Client-Version': '1.0',
  'Client-Platform': 'W',
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const restorePassword = (uuid, password, confirmPassword, ) => post('/auth/email/recovery/password', {
  token: uuid,
  password: sha1(password),
  confirm: sha1(confirmPassword),
}).then(handleErrors)


export const get = (path) => {
  return fetch(`${api}${path}`, { headers })
}

export const post = (path, params) => {
  return fetch(`${api}${path}`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(params)
  })
}

export const put = (path, params) => {
  return fetch(`${api}${path}`, {
    method: 'PUT',
    headers: {
      ...headers,
    },
    body: JSON.stringify(params)
  })
}

export const deleteRequest = (path) => {
  return fetch(`${api}${path}`, {
    method: 'DELETE',
    headers,
  })
}
