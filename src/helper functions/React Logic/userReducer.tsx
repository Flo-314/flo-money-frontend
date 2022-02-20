import {user} from "../types/interfaces";
import localStoreUser from "../Logic/LocalStoreUser";
interface action {
  type: "pushUser" | "loadUser" | "login" | "logout";
  user?: user;
}

export default function userReducer(user: user, action: action) {
  switch (action.type) {
    case "pushUser": {
      return action.user;
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
    case "login": {
      if (action.user) {
        const User: any = action.user;

        localStoreUser(User);

        return action.user;
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
