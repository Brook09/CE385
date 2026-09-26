import express from "express";
import todoRouter from "./routes/todoRouter.mjs";

const app = express();

const PORT = 3000;

// Middleware สำหรับอ่าน JSON body
app.use(express.json());

// Group Router
app.use("/api/v1/todos", todoRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});