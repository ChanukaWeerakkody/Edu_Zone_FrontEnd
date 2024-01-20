"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteCourseMutation = exports.useGetAllCoursesQuery = exports.useCreateCourseMutation = exports.coursesApi = void 0;
var apiSlice_1 = require("../api/apiSlice");
exports.coursesApi = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        createCourse: builder.mutation({
            query: function (data) { return ({
                url: 'create-course',
                method: 'POST',
                body: data,
            }); },
        }),
        getAllCourses: builder.query({
            query: function () { return ({
                url: 'get-courses',
                method: 'GET',
            }); },
        }),
        deleteCourse: builder.mutation({
            query: function (id) { return ({
                url: "delete-course/".concat(id),
                method: 'DELETE',
            }); },
        })
    }); },
});
exports.useCreateCourseMutation = exports.coursesApi.useCreateCourseMutation, exports.useGetAllCoursesQuery = exports.coursesApi.useGetAllCoursesQuery, exports.useDeleteCourseMutation = exports.coursesApi.useDeleteCourseMutation;
