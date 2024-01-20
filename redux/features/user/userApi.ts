import {apiSlice} from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateAvatar: builder.mutation({
            query: (avatar) => ({
                url: 'update-user-avatar',
                method: 'PUT',
                body:{avatar},
                credentials: 'include',
            }),
        }),

        getAllUsers: builder.query({
            query: () => ({
                url: 'getAll-users',
                method: 'GET',
                credentials: 'include',
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `delete-user/${id}`,
                method: 'DELETE',
            }),
        })
    }),
})

export const {useUpdateAvatarMutation,useGetAllUsersQuery,useDeleteUserMutation} = userApi;