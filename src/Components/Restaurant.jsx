import React from "react";

const Restaurant = (props) => {
    const { restData } = props
    const { id, name, avgRating, costForTwo, cuisines, cloudinaryImageId } = restData?.info
    const { slaString } = restData.info.sla


    return (
        <div className="w-[200px] rounded-lg h-[420px]  m-5 shadow-xl hover:shadow-slate-400 ">
            <img className=" p-4 w-[200px] h-[200px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <div className="details px-4 text-left">
                <h1 className="py-2 font-bold">{name}</h1>
                <ul>
                    <li className="py-1">{avgRating}</li>
                    <li className="py-1">{slaString}</li>
                    <li className="py-1">{costForTwo}</li>
                </ul>
                <p className="">{cuisines.slice(0, 2).join(', ')}</p>
            </div>
        </div>
    )
}


export default Restaurant;


