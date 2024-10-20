import { http, HttpResponse } from 'msw';

let data = [
	{ task: 'Task1', id: 1, done: false },
	{ task: 'Task2', id: 2, done: false }
];

export const handlers = [
	http.get('http://localhost:8080/api/todos', () => {
		console.log('fetches todos');
		return HttpResponse.json(data);
	}),

	http.post('http://localhost:8080/api/todos', async ({ request, params }) => {
		console.log('adds a todo');
		// const body = await request.formData(); // ????
		const todo3 = { task: 'Task3', id: 3, done: false };
		data = [...data, todo3];
		return HttpResponse.json(todo3);
	}),

	http.delete('http://localhost:8080/api/todos/1', async ({ params }) => {
		console.log('removes a todo');
		data = data.filter((item) => item.id !== 1);
		return HttpResponse.json({ message: 'Task removed successfully' });
	}),

	http.put('http://localhost:8080/api/todos/2', async ({ params }) => {
		console.log('toggles a todo');
		data.forEach((item) => {
			if (item.id === 2) {
				item.done = !item.done;
			}
		});
		return HttpResponse.json({ message: 'task updated' });
	})
];
