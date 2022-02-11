const localStoreUser = (user: object) => {
  let User = JSON.stringify(user);

  localStorage.setItem("loggedUser", User);
};

export default localStoreUser;
