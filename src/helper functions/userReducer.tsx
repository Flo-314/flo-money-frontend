import fetchApi from "./fetchApi";

interface action {
  type: "getData" | "loadUser" | "login" | "logout";
  user?: user;
}
interface user {
  id: string;
  token: string;
  data?: object;
}

export default function userReducer(user: user, action: action) {
  switch (action.type) {
    case "getData": {
      const getUserData = async () => {
        const userData = await fetchApi(user.token, "user", "GET", user.id);
        const User = {...user, userData};

        console.log(User);

        return User;
      };

      return getUserData();
    }
    case "loadUser": {
      const loggedUserJSON = localStorage.getItem("loggedUser");

      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);

        return user;
      }
    }
    case "logout": {
      localStorage.removeItem("loggedUser");
      const user = {token: undefined, id: undefined, data: undefined};

      return user;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
