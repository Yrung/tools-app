import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carToolApi = createApi({
  reducerPath: 'carToolApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3060/'}),
  endpoints: builder => ({
    getCars: builder.query({
      query: () => 'cars',   // GET http://localhost:3060/cars <- return the cars list from the rest
      providesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
    appendCar: builder.mutation({
      query: newCar => ({
        url: 'cars',
        method: 'POST',
        body: newCar,
      }),
      invalidatesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
    removeCar: builder.mutation({
      query: carId => ({
        url: `cars/${carId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cars', id: 'LIST' }],
    }),
  }),
});

export const { useGetCarsQuery, useAppendCarMutation, useRemoveCarMutation } = carToolApi;