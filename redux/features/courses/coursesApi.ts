import { apiSlice } from '../api/apiSlice';

export const coursesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: 'create-course',
                method: 'POST',
                body: data,
            }),
        }),
        getAllCourses: builder.query({
            query: () => ({
                url: 'get-courses',
                method: 'GET',
            }),
        })
    }),
});

export const { useCreateCourseMutation, useGetAllCoursesQuery } = coursesApi;

