import {apiSlice} from "../api/apiSlice";
import {userRegistration} from "./authSlice";

type RegistrationResponse = {
    message: string;
    activationToken: string;
}

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: 'registration',
                method: 'POST',
                body: data,
                credentials: 'include' as const,
            }),
            /*invalidatesTags: ['Users']*/
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token: result.data.activationToken
                        })
                    )
                } catch (error:any) {
                    console.log(error);
                }
            }
        }),
        activation:builder.mutation({
            query:({activation_token,activation_code}) => ({
                url: 'activate-user',
                method: 'POST',
                body: {
                    activation_token,
                    activation_code
                },
            })
        })
       /* userLoggedIn: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        }),
        userLoggedOut: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: '/auth/logout',
            })
        }),*/
    })
});

export const {useRegisterMutation, useActivationMutation} = authApi