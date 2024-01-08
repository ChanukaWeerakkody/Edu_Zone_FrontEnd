"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoggedOut = exports.userLoggedIn = exports.userRegistration = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    token: "",
    user: "",
};
var authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState: initialState,
    reducers: {
        userRegistration: function (state, action) {
            state.token = action.payload.token;
        },
        userLoggedIn: function (state, action) {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: function (state) {
            state.token = "";
            state.user = "";
        }
    },
});
exports.userRegistration = (_a = authSlice.actions, _a.userRegistration), exports.userLoggedIn = _a.userLoggedIn, exports.userLoggedOut = _a.userLoggedOut;
exports.default = authSlice.reducer;
