import { createSlice } from "@reduxjs/toolkit";

const UserRedux = createSlice({
  name: "user",
  initialState: {
    registeruser: JSON.parse(localStorage.getItem("register")) || {},
    loginuser: JSON.parse(localStorage.getItem("login")) || {},
  },
  reducers: {
    addregister: (state, action) => {
      state.registeruser = action.payload;
      localStorage.setItem("register", JSON.stringify(state.registeruser));
    },
    addlogin: (state, action) => {
      if (
        state.registeruser.emailaddress == action.payload.emailaddress &&
        state.registeruser.confirmpassword == action.payload.password
      ) {
        state.loginuser = action.payload;
        localStorage.setItem("login", JSON.stringify(state.loginuser))
      }
    },
  },
});

export const { addregister, addlogin } = UserRedux.actions;
export default UserRedux.reducer;
