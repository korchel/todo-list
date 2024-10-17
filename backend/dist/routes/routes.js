import { Router } from "express";
import { getTodos, addTodo, getTodo, updateTodo, removeTodo, } from "../controllers/controller.js";
export const router = Router();
router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.get("/todos/:id", getTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", removeTodo);
