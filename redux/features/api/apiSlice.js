"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.apiSlice = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: ("http://localhost:8000/api/v1/"),
    }),
    endpoints: function (builder) { return ({}); }
});
exports._b = _a = exports.apiSlice;
