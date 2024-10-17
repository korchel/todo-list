export const getTodosQuery = "SELECT * FROM todos";
export const getTodoQuery = "SELECT * FROM todos WHERE id = $1";
export const addTodoQuery = "INSERT INTO todos (task, done) VALUES ($1, $2)";
export const checkIfTodoExistsQuery = "SELECT u FROM todos u WHERE u.task = $1";
export const getTodoByTaskQuery = "SELECT * FROM todos WHERE task = $1";
export const removeTodoQuery = "DELETE FROM todos WHERE id = $1";
