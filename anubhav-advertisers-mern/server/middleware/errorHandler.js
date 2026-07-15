// Centralised error handler. Keeps route/controller code free of
// try/catch boilerplate for unexpected failures.
function notFound(req, res, next) {
  res.status(404).json({ success: false, error: `Route not found: ${req.method} ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    error: status === 500 ? "Something went wrong on our end." : err.message,
  });
}

module.exports = { notFound, errorHandler };
