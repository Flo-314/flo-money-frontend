import {createContext} from "react";

import {user} from "../types/interfaces";

export const UserContext = createContext<user>({
  token: undefined,
  userId: undefined,
  data: undefined,
});
export const UserDispatchContext = createContext(undefined);
