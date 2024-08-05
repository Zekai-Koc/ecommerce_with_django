const { count } = require("console");
const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

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

const products = JSON.parse(
   fs.readFileSync(`${__dirname}//data//products.json`, "utf-8")
);

const getAllProducts = (req, res) => {
   res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      count: products.length,
      data: products,
   });
};

const getProduct = (req, res) => {
   console.log(req.params);
   // const id = req.params.id * 1;
   const id = req.params.id;
   const product = products.find((el) => el._id === id);

   if (!product) {
      return res.status(404).json({
         status: "fail",
         message: "Invalid ID",
      });
   }

   res.status(200).json({
      status: "success",
      data: { product },
   });
};

const createProduct = (req, res) => {
   console.log(req.body);
   res.status(201).json({
      status: "success",
      data: {
         product: "<New product here...>",
      },
   });
};

const updateProduct = (req, res) => {
   res.status(200).json({
      status: "success",
      data: {
         product: "<Updated product here...>",
      },
   });
};

const deleteProduct = (req, res) => {
   res.status(204).json({
      status: "success",
      data: null,
   });
};

const getAllUsers = (req, res) => {
   res.status(200).json({
      status: "success",
      message: "This is not yet implemented",
   });
};

const getUser = (req, res) => {
   res.status(200).json({
      status: "success",
      message: "This is not yet implemented",
   });
};

const createUser = (req, res) => {
   res.status(201).json({
      status: "success",
      message: "This is not yet implemented",
   });
};

const updateUser = (req, res) => {
   res.status(200).json({
      status: "success",
      message: "This is not yet implemented",
   });
};

const deleteUser = (req, res) => {
   res.status(204).json({
      status: "success",
      message: "This is not yet implemented",
   });
};

const productRouter = express.Router();
const userRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter
   .route("/:id")
   .get(getProduct)
   .patch(updateProduct)
   .delete(deleteProduct);

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

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
