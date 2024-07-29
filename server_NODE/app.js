const express = require("express");
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

const app = express();

console.log(process.env.NODE_ENV);

app.get("/", (req, res) => {
   res.status(200).json({
      message: "hello from my natours server.",
      app: "Natours",
   });
});

app.post("/", (req, res) => {
   res.status(200).json({ message: "post request..." });
});

module.exports = app;

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
