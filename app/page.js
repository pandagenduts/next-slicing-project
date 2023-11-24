"use client";

import { MdArrowBack } from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { TbPencil } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import AddNewProduct from "./components/product-list/AddNewProduct";
import AddProduct from "./components/product-list/AddProduct";
import Image from "next/image";
export default function Home() {
  const categoryClasses =
    "py-1 px-3 md:px-4 md:py-2 border border-mainWhite rounded-xl whitespace-nowrap";

  return (
    <>
      <section className="container">
        <header></header>
        <div className="mb-6 flex items-center overflow-auto rounded-xl bg-mainGrey px-4 py-4 md:px-8 md:py-4">
          <span className="mr-3">Category</span>
          <ul className="mr-6 flex gap-3">
            <li className={categoryClasses}>
              <span>Cocktail</span>
            </li>
            <li className={categoryClasses}>
              <span>Shooters</span>
            </li>
            <li className={categoryClasses}>
              <span>Premium Spirits</span>
            </li>
            <li className={categoryClasses}>
              <span>Non-Alcoholic Beverages</span>
            </li>
          </ul>
          <button className="h-[30px] w-[30px] cursor-pointer">
            <TbPencil style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
        <main className="grid auto-rows-[minmax(0,_2fr)] grid-cols-1 gap-5 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1151px]:w-[1044px] min-[1151px]:gap-11">
          <div className="flex cursor-pointer flex-col rounded-xl bg-mainGrey p-4">
            <h4 className="mb-[13px]">15.000 NT</h4>
            <Image
              src="/Product-1.png"
              width={196}
              height={153}
              alt="Product-Image"
              className="mb-3 max-h-[153px] w-full rounded-lg object-contain"
            />
            <h2 className="product-card-title mb-[13px] font-bold">
              Pack of Beer (6pcs of heineken)
            </h2>
            <p className="mb-[13px] text-sm">
              Heineken lager beer, or known as just Heineken, is one of the pale
              beers with 5% alcohol.{" "}
            </p>
            <span className="block text-sm font-bold">6pcs</span>
          </div>

          <AddProduct />
          <AddNewProduct />
        </main>
      </section>
    </>
  );
}
