import { createStoreHook } from "react-redux";
import reducer from "./counter/counterReducer";

const store = createStoreHook(reducer)

export default store
