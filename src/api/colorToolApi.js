import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const colorToolApi = createApi({
  reducerPath: 'colorToolApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3060/'}),
  endpoints: builder => ({
    getColors: builder.query({
      query: () => 'colors',  // GET http://localhost:3060/ <- return the colors list from the REST
      providesTags: [{ type: 'Colors', id: 'LIST' }],
    }),
    appendColor: builder.mutation({
      query: newColor => ({
        url: 'colors',
        method: 'POST',
        body: newColor,
      }),
      invalidatesTags: [{ type: 'Colors', id: 'LIST' }],
    }),
    removeColor: builder.mutation({
      query: colorId => ({
        url: `colors/${colorId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Colors', id: 'LIST' }],
    })
  }),
});

export const { useGetColorsQuery, useAppendColorMutation, useRemoveColorMutation } = colorToolApi;