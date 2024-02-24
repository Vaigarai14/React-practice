import React, { useEffect } from "react";
import Restaurant from "./Restaurant";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Body = () => {

    const [restaurantsLists, setrestaurantsLists] = useState([]);
    const [filtereditem, setfiltereditem] = useState([])
    let [searchText, setsearchText] = useState([]);

    useEffect(
        () => {
            fetchData();
            console.log("useeffect");
        }, []
    )

    const fetchData = (async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let jsondata = await data.json()
        setrestaurantsLists(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfiltereditem(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    })

    // console.log(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    return (
        < div className="text-center" >
            <div id="bodys"
                className="text-center m-5">
                <input
                    placeholder="Enter the value!!!"
                    type="search"
                    name="Enter the value"
                    id="Search bar"
                    onChange={
                        (e) => {
                            setsearchText(e.target.value)
                        }
                    }
                    className=" bg-gray-200 p-2 
                    rounded-lg w-80" />

                <button
                    onClick={() => {
                        let filterlist = restaurantsLists.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfiltereditem(filterlist)
                    }
                    }
                    id="searchbtn"
                    className="m-2 p-2 w-20 rounded-md bg-red-500 text-white 
                    font-semibold ">
                    Search
                </button>


                <button
                    onClick={() => {
                        const filteredlist = restaurantsLists.filter(
                            (ele) => {
                                return ele.info.avgRating >= 4.5
                            })
                        setfiltereditem(filteredlist);
                    }
                    }
                    id="Filterbtn"
                    className="bg-slate-300 rounded-md p-2 ">Rating 4+</button>
            </div >
            <div className="restaur-container inline-flex flex-wrap justify-center">
                {
                    filtereditem.map((rest) => <Link key={rest.info.id} to={"restaurant/" + rest.info.id}><Restaurant restData={rest}  ></Restaurant></Link>
                    )
                }
            </div>
        </div >
    )
}


export default Body; 