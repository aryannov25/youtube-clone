import React from "react";
import Logo from "../img/logo.png";
import HamMenu from "../img/menu.svg";

function Head() {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8" alt="menu" src={HamMenu} />
        <img className="h-8 mx-2" alt="logo" src={Logo} />
      </div>
      <div className="col-span-10 text-center">
        <input className="w-1/2 p-1 border border-gray-400" type="text" />
        <button className="p-1 px-2 border border-gray-400"><i class="fa fa-search"></i></button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
}

export default Head;
