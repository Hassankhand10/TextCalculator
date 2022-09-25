import { combineReducers } from "redux";
import tableReducer from "./table.reducer";

const rootReducer = combineReducers({
  tableReducer: tableReducer
});

export default rootReducer;