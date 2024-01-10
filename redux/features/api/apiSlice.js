"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefreshTokenQuery = exports.apiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.apiSlice = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: ("http://localhost:8000/api/v1/"),
    }),
    endpoints: function (builder) { return ({
        refreshToken: builder.query({
            query: function (data) { return ({
                url: 'refresh',
                method: 'GET',
                credentials: 'include',
            }); }
        })
    }); }
});
exports.useRefreshTokenQuery = exports.apiSlice.useRefreshTokenQuery;
