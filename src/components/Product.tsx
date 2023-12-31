import React from "react";

import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/@types/Product";
import CardRating from "./CardRating";
import AddFavouritesButton from "./AddFavouritesButton";
import AddCartButton from "./AddCartButton";

export default function Product({
  _id,
  title,
  specs,
  price,
  countInStock,
  imageUrl,
  rating,
}: IProduct) {
  const onClickAddFavourites = () => {};

  const onClickAddCart = () => {};

  return (
    <div className="product-block">
      <div className="product-block__inner-img">
        {imageUrl ? (
          <Image
            width={128}
            height={128}
            src="/products/dexp-ac-ch9onf.jpg"
            alt={title}
            className="product-block__img"
          />
        ) : (
          <div className="skeleton"></div>
        )}
      </div>
      <Link href={`/products/${_id}`}>
        <h4 className="product-block__title text-primary">
          {title + " " + specs}
        </h4>
      </Link>
      <CardRating rating={rating} />
      {countInStock && (
        <span className="product-block__count-in-stock">
          В наличии: {countInStock} шт.
        </span>
      )}
      <div className="product-block__price">
        {price && price.toLocaleString()} ₽
      </div>
      <AddFavouritesButton
        id={_id}
        onClickAddFavourites={onClickAddFavourites}
      />
      <AddCartButton id={_id} onClickAddCart={onClickAddCart} />
    </div>
  );
}
