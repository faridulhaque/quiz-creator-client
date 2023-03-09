import { apiSlice } from "../rooApi/apiSlice";

const questionPaperApi = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
      createQuestionPaper: builder.mutation({
        query: (data: any) => ({
          url: "/qp/create",
          method: "POST",
          body: data,
        }),
      }),

      getQuestionPapers: builder.query({
        query: (email:string) => ({
          url: `/qp/all/${email}`,
          method: "GET",
        }),
      }),
  


    }),
  });


export const {useCreateQuestionPaperMutation, useGetQuestionPapersQuery} = questionPaperApi