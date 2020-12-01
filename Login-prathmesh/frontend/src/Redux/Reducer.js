import action from "./Action";
import { combineReducers } from "redux";

const initialUserState = {
  user: undefined,
};
const user_reducer = (state = initialUserState, actions) => {
  switch (actions.type) {
    case action.SET_USER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_USER:
      return {
        user: undefined,
        ...state,
      };
    default:
      return state;
  }
};

const initialCurrentUserState = {
  current__user: undefined,
};
const current__user__reducer = (state = initialCurrentUserState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case action.CURRENT__USER:
      return {
        user: actions.payload,
      };
    case action.CLEAR__CURRENT__USER:
      return {
        current__user: undefined,
      };
    default:
      return state;
  }
};

const initialAdminState = {
  admin: undefined,
};
const admin_reducer = (state = initialAdminState, actions) => {
  switch (actions.type) {
    case action.SET_ADMIN:
      return {
        user: actions.payload,
      };
    case action.CLEAR_ADMIN:
      return {
        admin: undefined,
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
  switch (actions.type) {
    case action.SET_OWNER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_OWNER:
      return {
        owner: undefined,
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
  current__user: current__user__reducer,
});

export default rootReducer;
