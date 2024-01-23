import {apiSlice} from "../api/apiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCourseAnalytics: builder.query({
            query: () => ({
                url: 'get-course-analytics',
                method: 'GET',
            })
        }),
        getUsersAnalytics: builder.query({
            query: () => ({
                url: 'get-user-analytics',
                method: 'GET',
            })
        })
    })
})
export const {useGetCourseAnalyticsQuery, useGetUsersAnalyticsQuery} = analyticsApi;