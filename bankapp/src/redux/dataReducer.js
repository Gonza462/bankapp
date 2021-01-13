//import { SET_ORDER, SET_TOTAL } from "../types";

const initialState = {
  order: [],
  count: 0,
  total: 0,
};

export default function(state = initialState, action) {
  console.log(action.type);
  console.log(action);
  switch (action.type) {
   

    default:
      return state;
  }
}
