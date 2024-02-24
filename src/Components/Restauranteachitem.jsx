import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { GROUPAPI } from '../Data/constants'

export const Restauranteachitem = (() => {

    let { resId } = useParams()
    console.log(resId);

    let [restaurantitem, setrestaurantitem] = useState([])
    let [groupitem, setgroupitem] = useState([])

    const fetchitem = (async () => {
        let data = await fetch(GROUPAPI +
            resId)
        let fetchdata = await data.json()
        console.log(fetchdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setrestaurantitem(fetchdata?.data?.cards[0]?.card?.card?.info)
        setgroupitem(fetchdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || fetchdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards);
    })

    useEffect(() => {
        fetchitem();
    }, [])

    let { name, areaName, avgRatingString, costForTwo, cuisines } = restaurantitem;

    return (
        <div className=" flex justify-center">
            <div className="w-[40em]">
                <h1 className="my-8 px-4 text-3xl font-bold">{name}</h1>
                <div className="px-4 flex justify-between m-3">
                    <div>
                        <p>{cuisines}</p>
                        <p>{areaName}</p>
                    </div>
                    <div>
                        <p>{avgRatingString}</p>
                        {/* <h1>{costForTwo / 100}</h1> */}
                    </div>
                </div>
                {groupitem.map((a) => {
                    return (
                        < div key={a?.card?.info?.id} className="shadow-xl  flex justify-between items-center" >
                            <h1 className="flex items-center h-[7em] m-4 p-2 ">{a?.card?.info?.name} - {a?.card?.info?.defaultPrice / 100 || a?.card?.info?.price / 100}</h1>
                            <img
                                className="size-28 rounded-xl object-cover"
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + a?.card?.info?.imageId}></img>
                        </div>)
                })
                }
            </div>
        </div >
    )
})