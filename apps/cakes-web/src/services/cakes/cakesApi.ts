import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cake } from '@waracle-test/models';

export const cakesApi = createApi({
  reducerPath: 'cakes',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCakes: builder.query<Cake[], void>({
      query: () => 'cakes',
    }),
    addCake: builder.mutation<Cake, any>({
      query(body) {
        return {
          url: '/cakes',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useGetCakesQuery, useAddCakeMutation } = cakesApi;
