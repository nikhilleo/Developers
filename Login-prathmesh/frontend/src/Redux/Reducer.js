import action from "./Action";

const initialUserState = {
  user: undefined,
};
const user_reducer = (state = initialUserState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case action.SET_USER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user_reducer;
