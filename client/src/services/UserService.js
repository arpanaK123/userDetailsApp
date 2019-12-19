const APP_URL = "http://192.168.1.107:5000";

export const createUser = async user => {
  const res = await fetch(`${APP_URL}/createUser`, {
    method: "POST",
    body: JSON.stringify({
      params: user
    }),
    headers: {
      "Content-type": "application/json"
    }
  });
  return await res.json();
};

export const getUser = async userName => {
  const res = await fetch(`${APP_URL}/searchUser`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      userName
    }
  });
  return await res.json();
};
