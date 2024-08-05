const { count } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const products = JSON.parse(
   fs.readFileSync(`${__dirname}//data//products.json`, "utf-8")
);

app.get("/api/v1/products", (req, res) => {
   res.status(200).json({
      status: "success",
      count: products.length,
      data: products,
   });
});

app.get("/api/v1/products/:id", (req, res) => {
   console.log(req.params);
   // const id = req.params.id * 1;
   const id = req.params.id;

   const product = products.find((el) => el._id === id);

   res.status(200).json({
      status: "success",
      data: { product },
   });
});

app.post("/api/v1/products", (req, res) => {
   console.log(req.body);
   res.status(201).json(req.body);
});

module.exports = app;

// const morgan = require("morgan");
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

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// MIDDLEWARES
// app.use((req, res, next) => {
//   console.log('hello from the middleware.  💣 😽');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log(req.requestTime);
//   next();
// });

// console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
// console.log("products: ", products);
