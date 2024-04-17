import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRequestParams, IResponseParams } from '../types';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/todos' }),
  endpoints: (builder) => ({
    getTodos: builder.query<IResponseParams, IRequestParams>({
      query: ({limit, skip}) => ({
        url: `?limit=${limit}&skip=${skip}`,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
} = todosApi;