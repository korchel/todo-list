/* eslint-disable @typescript-eslint/no-invalid-void-type */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type ITask } from '../types';

interface ItaskUpdateRequest {
  id: number,
  update: {
    task?: string
    done?: boolean
  }
}

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sleepypancake-todo-app-b1d577334394.herokuapp.com/api/v1/todos' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => ({
        url: '',
      }),
      providesTags: ['Task'],
    }),

    getTask: builder.query<ITask, number>({
      query: (id) => ({
        url: `:${id}`,
      }),
    }),

    addTask: builder.mutation({
      query: (newTask) => ({
        url: '',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Task'],
    }),

    removeTask: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Task'],
    }),

    updateTask: builder.mutation<void, ItaskUpdateRequest>({
      query: ({ id, update }) => ({
        url: `${id}`,
        method: 'PUT',
        body: update,
      }),
      invalidatesTags: ['Task'],
    })
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} = todosApi;
