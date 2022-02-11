const fetchApi = async (token: string, route: string, action: string, body: any) => {
  try {
    const Authorization = "Bearer " + token;
    let link = "http://localhost:4000/api/" + route;

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
