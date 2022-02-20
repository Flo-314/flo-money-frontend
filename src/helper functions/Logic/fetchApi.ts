const fetchApi = async (token: string | any, route: string, action: string, body: any) => {
  try {
    const Authorization = "Bearer " + token;
    let link = "https://flo-money.herokuapp.com/api/" + route;

    body = JSON.stringify(body);

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
