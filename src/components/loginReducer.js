import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    password: "",
};


const login = createSlice({
    name: "Login",
    initialState: initialState,
    reducers: {
        signIn: (state, action) => {
            return {
                ...state,
                title: action.payload.title,
                password: action.payload.password
            }
        }
    }
})

export const {signIn} = login.actions;
export default login.reducer;