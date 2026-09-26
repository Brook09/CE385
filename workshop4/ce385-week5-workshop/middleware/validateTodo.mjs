export function validateTodo(req, res, next) {
  const { title, done, priority } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      error: "title is required and must be a string"
    });
  }

  if (done !== undefined && typeof done !== "boolean") {
    return res.status(400).json({
      error: "done must be a boolean"
    });
  }

  if (priority !== undefined && typeof priority !== "string") {
    return res.status(400).json({
      error: "priority must be a string"
    });
  }

  next();
}