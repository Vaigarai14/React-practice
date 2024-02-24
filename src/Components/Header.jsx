import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="head"
            className="m-3 px-10 shadow-slate-400 shadow-lg shp flex items-center justify-between ">
            <div
                id="img"
                className="w-[130px] h-25">
                <img
                    src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg">
                </img>
            </div>
            <div
                className="inline-flex"
                id="nav-tabs">
                <ul
                    className="inline-flex m-2 p-2 font-semibold cursor-pointer">
                    <Link to={"/"}><li className="px-4 p-2 text-lg hover:text-red-700">Home</li></Link>
                    <Link to={"/about"}><li className="px-4 p-2 text-lg hover:text-red-600">About</li></Link>
                    <Link to={"/contact"}><li className="px-4 p-2 text-lg hover:text-red-600">Contact Us</li></Link>
                    <Link to={""}><li className="px-4 p-2 text-lg hover:text-red-600">Cart</li></Link>
                </ul >
            </div >
        </div >
    )
}

export default Header;