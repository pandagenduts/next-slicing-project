import React from "react";
import { MdArrowBack } from "react-icons/md";
import { PiPackage } from "react-icons/pi";

export default function Header() {
  return (
    <section className="relative mx-auto mb-[68px] mt-8 max-w-[1110px]">
      <button className="absolute left-[16px] top-14 min-[360px]:top-[4px] flex items-center gap-1">
        <MdArrowBack style={{ width: "20px", height: "20px" }} />
        Back
      </button>
      <div className="flex w-full items-center justify-center gap-[10px] text-2xl font-medium">
        <PiPackage style={{ width: "24px", height: "24px" }} />
        Product List
      </div>
    </section>
  );
}
