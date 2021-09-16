import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cake } from '@waracle-test/models';

export const cakesApi = createApi({
  reducerPath: 'cakes',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['CAKES'],
  endpoints: (builder) => ({
    getCakes: builder.query<Cake[], void>({
      query: () => 'cakes',
      providesTags: ['CAKES'],
    }),
    addCake: builder.mutation<Cake, Omit<Cake, 'id'>>({
      query(body) {
        return {
          url: '/cakes',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['CAKES'],
    }),
    deleteCake: builder.mutation<Cake, number>({
      query(id) {
        return {
          url: `/cakes/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['CAKES'],
    }),
  }),
});

export const { useGetCakesQuery, useAddCakeMutation, useDeleteCakeMutation } =
  cakesApi;
