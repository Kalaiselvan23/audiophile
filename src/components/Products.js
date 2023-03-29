import React from "react";
import Arrow from "../images/shared/desktop/icon-arrow-right.svg";
export default function Products() {
  return (
    <div className=" flex w-[70%] mx-auto justify-around h-fit my-32 max-sm:flex-col items-center">
      <div className="product-categ">
        <img
          src={require("../images/category-headphones/desktop/image-xx99-mark-one-removebg-preview.png")}
          alt=""
          className="categ-image"
        />
        <span>Headphones</span>
        <span className="flex text-xs text-[#95774A] mt-2">
          SHOP
          <img src={Arrow} alt="" className="right-arrow" />
        </span>
      </div>
      <div className="product-categ">
        <img
          src={require("../images/category-speakers/desktop/image-zx7-removebg-preview.png")}
          alt=""
          className="categ-image"
        />
        <span>Speakers</span>
        <span className="flex text-xs text-[#95774A] mt-2">
          SHOP
          <img src={Arrow} alt="" className="right-arrow" />
        </span>
      </div>
      <div className="product-categ">
        <img
          src={require("../images/category-earphones/desktop/image-yx1-earphones-removebg-preview.png")}
          alt=""
          className="categ-image"
        />
        <span>Earphones</span>
        <span className="flex text-xs text-[#95774A] mt-2">
          SHOP
          <img src={Arrow} alt="" className="right-arrow" />
        </span>
      </div>
    </div>
  );
}
