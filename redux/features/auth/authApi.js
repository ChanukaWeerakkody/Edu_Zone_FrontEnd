"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogoutQuery = exports.useLoginMutation = exports.useActivationMutation = exports.useRegisterMutation = exports.authApi = void 0;
var apiSlice_1 = require("../api/apiSlice");
var authSlice_1 = require("./authSlice");
exports.authApi = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        register: builder.mutation({
            query: function (data) { return ({
                url: 'registration',
                method: 'POST',
                body: data,
                credentials: 'include',
            }); },
            /*invalidatesTags: ['Users']*/
            onQueryStarted: function (arg, _a) {
                var dispatch = _a.dispatch, queryFulfilled = _a.queryFulfilled;
                return __awaiter(this, void 0, void 0, function () {
                    var result, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, queryFulfilled];
                            case 1:
                                result = _b.sent();
                                dispatch((0, authSlice_1.userRegistration)({
                                    token: result.data.activationToken
                                }));
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _b.sent();
                                console.log(error_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
        }),
        activation: builder.mutation({
            query: function (_a) {
                var activation_token = _a.activation_token, activation_code = _a.activation_code;
                return ({
                    url: 'activate-user',
                    method: 'POST',
                    body: {
                        activation_token: activation_token,
                        activation_code: activation_code
                    },
                });
            }
        }),
        /*login: builder.mutation({
            query: ({email,password}) => ({
                url:'login',
                method:'POST',
                body:{
                    email,
                    password,
                },
                //credentials: 'include' as const
            }),
            async onQueryStarted(arg, {queryFulfilled,dispatch}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.activationToken,
                            user: result.data.user,
                        })
                    )
                } catch (error:any) {
                    console.log(error);
                }
            }
        })*/
        login: builder.mutation({
            query: function (_a) {
                var email = _a.email, password = _a.password;
                return ({
                    url: 'login',
                    method: 'POST',
                    body: {
                        email: email,
                        password: password,
                    },
                    //credentials: 'include' as const
                });
            },
            onQueryStarted: function (arg, _a) {
                var queryFulfilled = _a.queryFulfilled, dispatch = _a.dispatch;
                return __awaiter(this, void 0, void 0, function () {
                    var result, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, queryFulfilled];
                            case 1:
                                result = _b.sent();
                                dispatch((0, authSlice_1.userLoggedIn)({
                                    accessToken: result.data.activationToken,
                                    user: result.data.user,
                                }));
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _b.sent();
                                console.log(error_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
        }),
        logout: builder.query({
            query: function () { return ({
                url: 'logout',
                method: 'GET',
                credentials: 'include'
            }); },
            onQueryStarted: function (arg, _a) {
                var queryFulfilled = _a.queryFulfilled, dispatch = _a.dispatch;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        try {
                            dispatch((0, authSlice_1.userLoggedOut)());
                        }
                        catch (error) {
                            console.log(error);
                        }
                        return [2 /*return*/];
                    });
                });
            }
        })
    }); }
});
exports.useRegisterMutation = exports.authApi.useRegisterMutation, exports.useActivationMutation = exports.authApi.useActivationMutation, exports.useLoginMutation = exports.authApi.useLoginMutation, exports.useLogoutQuery = exports.authApi.useLogoutQuery;
