import express from "express";
import { validateTodo } from "../middleware/validateTodo.mjs";

const todoRouter = express.Router();

const TODOS = [
  {
    id: "1",
    title: "อ่านหนังสือ Node.js",
    done: false,
    priority: "high"
  },
  {
    id: "2",
    title: "ทำการบ้าน Express.js",
    done: true,
    priority: "medium"
  },
  {
    id: "3",
    title: "ฝึกเขียน Middleware",
    done: false,
    priority: "high"
  },
  {
    id: "4",
    title: "ทดสอบ API ด้วย Postman",
    done: false,
    priority: "low"
  }
];

// 1. GET /health
todoRouter.get("/health", (req, res) => {
  return res.json({
    status: "ok"
  });
});

// 2. GET /
todoRouter.get("/", (req, res) => {
  return res.json(TODOS);
});

// 3. GET /:id
todoRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const todo = TODOS.find((item) => item.id === id);

  if (!todo) {
    return res.status(404).json({
      error: `ไม่พบรายการ ${id}`
    });
  }

  return res.json(todo);
});

// 4. POST /todos
todoRouter.post("/todos", validateTodo, (req, res) => {
  const { title, done = false, priority = "medium" } = req.body;

  const newTodo = {
    id: String(TODOS.length + 1),
    title,
    done,
    priority
  };

  TODOS.push(newTodo);

  return res.status(201).json(newTodo);
});

export default todoRouter;