import React, {useState} from "react";
import {useParams} from "react-router-dom";
import "../cssPages/products.css"




export default function Products() {
    const x=useParams()
    console.log(x)
    const [arr]=useState([1,2,3,4,5,6,7,8,9,10])
    const items=arr.map(x=>{
        return (
        <div>
            <div className={"product"}>Image</div>
            <h4>ItemName</h4>
            <p>Item detail lakndka andappafa afşankfşa</p>
            <p>500$</p>
        </div>)
    })

    return (
        <div className={"products-main"}>
            <div className={"filters-container"}>
                <h3>Filters</h3>
            </div>
            <div className={"products-container"}>
                {items}
            </div>
        </div>
    )
}