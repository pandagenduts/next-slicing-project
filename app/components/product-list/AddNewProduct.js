import React from "react";
import { IoAdd } from "react-icons/io5";

export default function AddNewProduct() {
  return (
    <div className="add-new-product-card flex h-[206px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-mainGrey">
      <IoAdd style={{ width: "24px", height: "24px" }} />
      Add New Product
    </div>
  );
}
