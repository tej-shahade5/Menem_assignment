import React from "react";
import {FaHome} from "react-icons/fa";
import {TbCertificate,TbDeviceGamepad2} from "react-icons/tb";
import {BsChatTextFill} from "react-icons/bs";
import {RiNotification4Line} from "react-icons/ri";
import {MdCreate} from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-2 mx-5 bg-white-500">
      <div className="flex">
        <div className="flex w-80">
          <img src={'https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" className="h-8 w-8 rounded-md object-cover" />
          <input
            type="text"
            placeholder="Search Menem"
            className="bg-gray-200 rounded-md ml-5 pl-4"
          />
        </div>
        <div className="flex flex-around ml-2">
            <FaHome size={30} className="mr-20"/>
            <TbCertificate size={30} className="mr-20"/>
            <TbDeviceGamepad2 size={30} className="mr-20"/>
            <BsChatTextFill size={30} className="mr-20"/>
            <RiNotification4Line size={30} className="mr-20"/>
        </div>
        <div className="flex w-80 ml-10">
            <MdCreate size={30} className="mx-2 "/>
            <div className="bg-blue-500 h-8 w-8 rounded-sm relative ml-8"></div>
            <div className="h-8 w-8 ml-8"></div>
            <div className="h-8 w-8 ml-8"></div>
            <div className="h-8 w-8 ml-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
