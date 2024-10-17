export const getTodosQuery: string = "SELECT * FROM todos";
export const getTodoQuery: string = "SELECT * FROM todos WHERE id = $1";
export const addTodoQuery: string =
  "INSERT INTO todos (task, done) VALUES ($1, $2)";
export const checkIfTodoExistsQuery: string =
  "SELECT u FROM todos u WHERE u.task = $1";
export const getTodoByTaskQuery: string = "SELECT * FROM todos WHERE task = $1";
export const removeTodoQuery: string = "DELETE FROM todos WHERE id = $1";
