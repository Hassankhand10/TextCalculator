import { SET_TABLE_HEADERS } from "../actionTypes";

const initialState = {
  headers: []
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_HEADERS:
      return {
        ...state,
        headers: action.payload
      }

    default:
      return { ...state };
  }
}

export default tableReducer;