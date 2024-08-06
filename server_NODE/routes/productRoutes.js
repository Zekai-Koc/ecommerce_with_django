const express = require("express");
const fs = require("fs");

const products = JSON.parse(
   fs.readFileSync(`${__dirname}//..//data//products.json`, "utf-8")
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

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
