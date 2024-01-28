// import { useState } from "react";
import NewProduct from "./NewProduct/NewProduct";
import isNewProduct from "./NewProduct/isNewProduct";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import ProductTopRating from "./ProductTopRating/ProductTopRating";

function ProductBaner({ product: { price, discount, rating, createdAt }, fontSize }) {
  const isNew = isNewProduct(createdAt);

  if (isNew) {
    return <NewProduct fontSize={fontSize} />;
  } else if (rating >= 4) {
    return <ProductTopRating fontSize={fontSize} />;
  } else if (discount) {
    return <ProductDiscount price={price} discount={discount} fontSize={fontSize} />;
  }

  return null;
}

export default ProductBaner;
