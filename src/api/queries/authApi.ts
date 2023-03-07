import { regInfoType } from "../../types/frontendTypes";
import { apiSlice } from "../rooApi/apiSlice";



const authApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query: (data: regInfoType) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data: any) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useRegisterMutation, useLoginMutation} = authApi;