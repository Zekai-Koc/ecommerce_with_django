import React from "react";
import products from "../products";
import { Card } from "react-bootstrap";
import Ratings from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
   return (
      <Card className="my-3 p-3 rounded">
         <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
         </Link>

         <Card.Body>
            <Link
               to={`/product/${product._id}`}
               style={{ textDecoration: "none" }}
            >
               <Card.Title as="div">
                  <strong>{product.name}</strong>
               </Card.Title>
            </Link>

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
