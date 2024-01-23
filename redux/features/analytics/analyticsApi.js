"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCourseAnalyticsQuery = exports.analyticsApi = void 0;
var apiSlice_1 = require("../api/apiSlice");
exports.analyticsApi = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        getCourseAnalytics: builder.query({
            query: function () { return ({
                url: 'get-course-analytics',
                method: 'GET',
            }); }
        })
    }); }
});
exports.useGetCourseAnalyticsQuery = exports.analyticsApi.useGetCourseAnalyticsQuery;
