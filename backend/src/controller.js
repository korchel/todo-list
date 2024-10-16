import {
  getTodosQuery,
  getTodoQuery,
  checkIfTodoExistsQuery,
  addTodoQuery,
  getTodoByTaskQuery,
  removeTodoQuery,
} from './queries';

export const getTodos = (req, res) => {
  pool.query(getTodosQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getTodo = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getTodoQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const addTodo = (req, res) => {
  const { task, done } = req.body;

  const isTaskDone = done ?? false;

  pool.query(checkIfTodoExistsQuery, [task], (error, results) => {
    if (results && results.rows.length) {
      res.status(400).json({ message: 'Task alreadz exists' });
    } else {
      pool.query(addTodoQuery, [task, isTaskDone], (error, results) => {
        if (error) throw error;

        pool.query(getTodoByTaskQuery, [task], (error, results) => {
          if (results.rows.length) {
            res.status(201).json(results.rows[0]);
          }
        });
      });
    }
  });
};

export const removeTodo = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getTodoQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.status(400).json({ message: 'Task does not exist.' });
    } else {
      pool.query(removeTodoQuery, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json({ message: 'Task removed successfully' });
      });
    }
  });
};

export const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { task, done } = req.body;

  let query = 'UPDATE todos SET ';
  const params = [];

  if (task !== undefined) {
    params.push(task);
    query += `task = $${params.length}, `;
  }

  if (done !== undefined) {
    params.push(done);
    query += `done = $${params.length}, `;
  }

  // Remove the last comma and space
  query = query.slice(0, -2);

  // Add the WHERE clause
  params.push(id);
  query += ` WHERE id = $${params.length}`;

  pool.query(getTodoQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.status(400).json({ message: 'Task does not exist.' });
    } else {
      pool.query(query, params, (error, results) => {
        if (error) throw error;

        res.status(200).json({ message: 'Task updated' });
      });
    }
  });
};
