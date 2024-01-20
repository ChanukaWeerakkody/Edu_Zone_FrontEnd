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
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `delete-course/${id}`,
                method: 'DELETE',
            }),
        })
    }),
});

export const { useCreateCourseMutation, useGetAllCoursesQuery ,useDeleteCourseMutation} = coursesApi;

