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
        })
    }),
})

export const {useUpdateAvatarMutation,useGetAllUsersQuery} = userApi;