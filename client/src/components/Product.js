import React from "react";
import products from "../products";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings";

const Product = ({ product }) => {
   return (
      <Card className="my-3 p-3 rounded">
         <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
         </a>

         <Card.Body>
            <a
               href={`/product/${product._id}`}
               style={{ textDecoration: "none" }}
            >
               <Card.Title as="div">
                  <strong>{product.name}</strong>
               </Card.Title>
            </a>

            <Card.Text as="div">
               <div className="my-3">
                  {/* {product.rating} from {product.numReviews} reviews */}
                  <Ratings
                     value={product.rating}
                     text={`${product.numReviews} reviews`}
                     color={"#f8e825"}
                  />
               </div>
            </Card.Text>

            <Card.Text as="h3">${product.price}</Card.Text>
         </Card.Body>
      </Card>
   );
};

export default Product;
