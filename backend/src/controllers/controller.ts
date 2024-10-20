import { db } from "../db.js";
import {
  getTodosQuery,
  getTodoQuery,
  checkIfTodoExistsQuery,
  addTodoQuery,
  getTodoByTaskQuery,
  removeTodoQuery,
} from "../queries/queries.js";
import { RequestHandler } from "express";

export const getTodos: RequestHandler = (req, res) => {
  db.query(getTodosQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getTodo: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);

  db.query(getTodoQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const addTodo: RequestHandler = (req, res) => {
  const { task, done } = req.body;

  const isTaskDone = done ?? false;

  db.query(checkIfTodoExistsQuery, [task], (error, results) => {
    if (results && results.rows.length) {
      res.status(400).json({ message: "Task alreadz exists" });
    } else {
      db.query(addTodoQuery, [task, isTaskDone], (error, results) => {
        if (error) throw error;

        db.query(getTodoByTaskQuery, [task], (error, results) => {
          if (results.rows.length) {
            res.status(201).json(results.rows[0]);
          }
        });
      });
    }
  });
};

export const removeTodo: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);

  db.query(getTodoQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.status(400).json({ message: "Task does not exist." });
    } else {
      db.query(removeTodoQuery, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json({ message: "Task removed successfully" });
      });
    }
  });
};

export const updateTodo: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);
  const { task, done } = req.body;

  let query = "UPDATE todos SET ";
  const params: Array<string | number> = [];

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

  db.query(getTodoQuery, [id], (error, results) => {
    if (!results.rows.length) {
      res.status(400).json({ message: "Task does not exist." });
    } else {
      db.query(query, params, (error, results) => {
        if (error) throw error;

        res.status(200).json({ message: "Task updated" });
      });
    }
  });
};
