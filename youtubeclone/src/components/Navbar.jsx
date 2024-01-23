import React from "react";
import Icons from "../assets/icons";
import images from "../assets/images/images";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-20 px-3">
      <div className="w-3/12 flex items-center space-x-4">
        <Icons.menu className="w-32 icon-style" />
        <img className="w-14" src={images.videoLogo} alt="" />
      </div>
      <div className="w-6/12 flex items-center space-x-4">
        <div className="w-3/4 flex items-center">
        <input  className="outline-none border p-2 h-10 flex-1" type="text" placeholder="Ara" />
        <div className="bg-gray-100 h-10 w-20 flex items-center justify-center border">
          <Icons.search className="icon-style"/>
        </div>
        </div>
      
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center text-center justify-center cursor-pointer">
          <Icons.microphone className="icon-style"/>
        </div>
      </div>

      <div className="w-3/12 flex items-center justify-end space-x-5">
        <Icons.video className="icon-style" />
        <Icons.notification className="icon-style"/>
        <div className="w-10 h-10 bg-gray-200 rounded-full icon-style"></div>
      </div>
    </div>
  );
};

export default Navbar;
