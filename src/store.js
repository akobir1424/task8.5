import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/loginReducer";

export default configureStore({
    reducer: {
        login: loginReducer,
    }
})