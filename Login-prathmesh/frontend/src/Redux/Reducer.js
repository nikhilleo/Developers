import action from "./Action";
import { combineReducers } from "redux";

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

const initialAdminState = {
  admin: undefined,
};
const admin_reducer = (state = initialAdminState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case action.SET_ADMIN:
      return {
        user: actions.payload,
      };
    case action.CLEAR_ADMIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const initialOwnerState = {
  owner: undefined,
};
const owner_reducer = (state = initialOwnerState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case action.SET_OWNER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_OWNER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
  admin: admin_reducer,
  owner: owner_reducer,
});

export default rootReducer;
