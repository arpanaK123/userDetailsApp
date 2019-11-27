const APP_URL = "http://192.168.43.37:5000";

export const createUser = async user => {
  const res = await fetch(`${APP_URL}/register`, {
    method: "POST",
    body: JSON.stringify({
      "command":"SIGNUP",
      "params" : user
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  return await res.json();
};

export const getUser = async userName => {
  const res = await fetch(`${APP_URL}/details`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      userName
    }
  });
  return await res.json();
};