const { count } = require("console");
const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
   console.log("Hello from the middleware.  💣 😽");
   next();
});

app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   console.log(req.requestTime);
   next();
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');
