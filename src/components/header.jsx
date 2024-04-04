import React from "react";
import { IoMdFlashlight } from "react-icons/io";

function Header() {
  return (
    <header className="bg-[#f5ba13] px-4 py-8 shadow-md">
      <h1 className="text-white font-mclaren font-light text-3xl flex justify-center">
        <IoMdFlashlight />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
