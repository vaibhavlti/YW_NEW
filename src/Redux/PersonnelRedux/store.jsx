import { createStore } from "redux";
import personnelreducer from "./reducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(personnelreducer, devtools);
export default store;
