interface user {
  token: string;
  id: string;
}

const localStoreUser = (user: user) => {
  let User = JSON.stringify(user);

  localStorage.setItem("loggedUser", User);
};

export default localStoreUser;
