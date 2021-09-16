import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cake } from '@waracle-test/models';

export const cakesApi = createApi({
  reducerPath: 'cakes',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCakes: builder.query<Cake[], void>({
      query: () => 'cakes',
    }),
    addCake: builder.mutation<Cake, Omit<Cake, 'id'>>({
      query(body) {
        return {
          url: '/cakes',
          method: 'POST',
          body,
        };
      },
    }),
    deleteCake: builder.mutation<Cake, number>({
      query(id) {
        return {
          url: `/cakes/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const { useGetCakesQuery, useAddCakeMutation, useDeleteCakeMutation } =
  cakesApi;
