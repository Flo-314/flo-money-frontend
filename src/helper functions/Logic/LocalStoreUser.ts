const localStoreUser = (user: any) => {
  let User = JSON.stringify(user);

  localStorage.setItem("loggedUser", User);
};

export default localStoreUser;
