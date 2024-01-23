"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditCourseMutation = exports.useDeleteCourseMutation = exports.useGetAllCoursesQuery = exports.useCreateCourseMutation = exports.coursesApi = void 0;
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
                url: 'getAll-courses',
                method: 'GET',
            }); },
        }),
        deleteCourse: builder.mutation({
            query: function (id) { return ({
                url: "delete-course/".concat(id),
                method: 'DELETE',
            }); },
        }),
        editCourse: builder.mutation({
            query: function (_a) {
                var id = _a.id, data = _a.data;
                return ({
                    url: "edit-course/".concat(id),
                    body: data,
                    method: 'PUT',
                });
            },
        })
    }); },
});
exports.useCreateCourseMutation = exports.coursesApi.useCreateCourseMutation, exports.useGetAllCoursesQuery = exports.coursesApi.useGetAllCoursesQuery, exports.useDeleteCourseMutation = exports.coursesApi.useDeleteCourseMutation, exports.useEditCourseMutation = exports.coursesApi.useEditCourseMutation;
