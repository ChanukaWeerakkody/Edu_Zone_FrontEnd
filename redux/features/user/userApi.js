"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteUserMutation = exports.useGetAllUsersQuery = exports.useUpdateAvatarMutation = exports.userApi = void 0;
var apiSlice_1 = require("../api/apiSlice");
exports.userApi = apiSlice_1.apiSlice.injectEndpoints({
    endpoints: function (builder) { return ({
        updateAvatar: builder.mutation({
            query: function (avatar) { return ({
                url: 'update-user-avatar',
                method: 'PUT',
                body: { avatar: avatar },
                credentials: 'include',
            }); },
        }),
        getAllUsers: builder.query({
            query: function () { return ({
                url: 'getAll-users',
                method: 'GET',
                credentials: 'include',
            }); },
        }),
        deleteUser: builder.mutation({
            query: function (id) { return ({
                url: "delete-user/".concat(id),
                method: 'DELETE',
            }); },
        })
    }); },
});
exports.useUpdateAvatarMutation = exports.userApi.useUpdateAvatarMutation, exports.useGetAllUsersQuery = exports.userApi.useGetAllUsersQuery, exports.useDeleteUserMutation = exports.userApi.useDeleteUserMutation;
