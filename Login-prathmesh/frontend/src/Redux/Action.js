const actions = {
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",

  SET_ADMIN: "SET_ADMIN",
  CLEAR_ADMIN: "CLEAR_ADMIN",

  SET_OWNER: "SET_OWNER",
  CLEAR_OWNER: "CLEAR_OWNER",

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

  setOwner: (data) => {
    return {
      type: actions.SET_OWNER,
      payload: data,
    };
  },

  clearOwner: (data) => {
    return {
      type: actions.SET_OWNER,
    };
  },

  setAdmin: (data) => {
    return {
      type: actions.SET_ADMIN,
      payload: data,
    };
  },

  clearAdmin: (data) => {
    return {
      type: actions.SET_ADMIN,
    };
  },
};

export default actions;
