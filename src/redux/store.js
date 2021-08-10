import { createStore } from "redux";
import reducers from "./reducers";

const inithialState = {
    User: {
        name: ""
    },
    errorMessage: "Mucho Pao"
}
const store = createStore(reducers,inithialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store