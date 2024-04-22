import { http, HttpResponse } from 'msw';

let data = [
  {task: 'Task1', id: 1, done: false},
  {task: 'Task2', id: 2, done: false}
];

export const handlers = [
  http.get('https://sleepypancake-todo-app-b1d577334394.herokuapp.com/api/v1/todos', () => {
    console.log('fetches todos')
    return HttpResponse.json(data);
  }),

  http.post('https://sleepypancake-todo-app-b1d577334394.herokuapp.com/api/v1/todos', async ({request, params}) => {
    console.log('adds a todo')
    // const body = await request.formData(); // ????
    const todo3 = {task: 'Task3', id: 3, done: false};
    data = [...data, todo3];
    return HttpResponse.json(todo3);
  }),

  http.delete('https://sleepypancake-todo-app-b1d577334394.herokuapp.com/api/v1/todos/1', async ({ params }) => {
    console.log('removes a todo');
    data = data.filter((item) => item.id !== 1)
    return HttpResponse.json({"message":"Task removed successfully"});
  }),

  http.put('https://sleepypancake-todo-app-b1d577334394.herokuapp.com/api/v1/todos/2',  async ({ params }) => {
    console.log('toggles a todo');
    data.forEach((item) => {
      if (item.id === 2) {
        item.done = !item.done;
      }
    })
    return HttpResponse.json({"message":"task updated"});
  }),
];
