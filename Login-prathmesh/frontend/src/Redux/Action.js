const actions = {
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",

  SET_ADMIN: "SET_ADMIN",
  CLEAR_ADMIN: "CLEAR_ADMIN",

  SET_OWNER: "SET_OWNER",
  CLEAR_OWNER: "CLEAR_OWNER",

  CURRENT__USER: "CURRENT__USER",
  CLEAR__CURRENT__USER: "CLEAR__CURRENT__USER",

  setUser: (data) => {
    return {
      type: actions.SET_USER,
      payload: data,
    };
  },

  clearUser: () => {
    return {
      type: actions.SET_USER,
    };
  },

  setCurrentUser: (data) => {
    return {
      type: actions.CURRENT__USER,
      payload: data,
    };
  },

  clearCurrentUser: () => {
    return {
      type: actions.CURRENT__USER,
    };
  },

  setOwner: (data) => {
    return {
      type: actions.SET_OWNER,
      payload: data,
    };
  },

  clearOwner: () => {
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

  clearAdmin: () => {
    return {
      type: actions.SET_ADMIN,
    };
  },
};

export default actions;
