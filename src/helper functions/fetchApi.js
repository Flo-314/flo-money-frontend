const fetchApi = async (token, route, action, body) => {
  try {
    const Authorization = "Bearer " + token;
    let link = "http://localhost:4000/api";

    if (route) {
      link += "/" + route;
    }

    const ping = await fetch(link, {
      method: action,
      body,

      headers: {
        Authorization,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const response = await ping.json();

    return response;
  } catch (err) {
    return err;
  }
};

export default fetchApi;
