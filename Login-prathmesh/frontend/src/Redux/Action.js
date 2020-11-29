const actions = {
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",

  fetchUsersRequest: () => {
    return {
      type: actions.FETCH_USERS_REQUEST,
    };
  },

  setUser: (data) => {
    return {
      type: actions.SET_USER,
      payload: data,
    };
  },

  clearUser: (data) => {
    return {
      type: actions.SET_USER,
    };
  },
};

export default actions;
