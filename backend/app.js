const express = require("express");
const useMiddleware = require("./middleware");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/auth', authRouter);
app.use('/profile', profileRouter);

useErrorHandlers(app);

module.exports = app;
