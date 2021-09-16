import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cake } from '@waracle-test/models';

export const cakesApi = createApi({
  reducerPath: 'cakes',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCakes: builder.query<Cake[], void>({
      query: () => 'cakes',
    }),
  }),
});

export const { useGetCakesQuery } = cakesApi;
