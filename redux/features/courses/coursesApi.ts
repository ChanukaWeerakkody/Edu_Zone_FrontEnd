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
                url: 'getAll-courses',
                method: 'GET',
            }),
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `delete-course/${id}`,
                method: 'DELETE',
            }),
        }),
        editCourse: builder.mutation({
            query: ({id,data}) => ({
                url: `edit-course/${id}`,
                body: data,
                method: 'PUT',
            }),
        })
    }),
});

export const { useCreateCourseMutation, useGetAllCoursesQuery ,useDeleteCourseMutation, useEditCourseMutation} = coursesApi;

