import { SET_TABLE_HEADERS } from "../actionTypes";

export const setTableHeaders = (__headers) => {
  return (dispatch) => {
    dispatch({ type: SET_TABLE_HEADERS, payload: [...__headers] })
  }
}