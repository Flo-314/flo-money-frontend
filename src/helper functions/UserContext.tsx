import {createContext} from "react";

import {user} from "./interfaces";

export const UserContext = createContext<user>({
  token: undefined,
  userId: undefined,
  data: undefined,
});
export const UserDispatchContext = createContext({});
