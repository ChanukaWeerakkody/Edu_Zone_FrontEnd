"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateAvatarMutation = exports.userApi = void 0;
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
    }); },
});
exports.useUpdateAvatarMutation = exports.userApi.useUpdateAvatarMutation;
