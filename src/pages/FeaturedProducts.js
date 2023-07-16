import {React, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {data} from "../data";
import "../cssPages/featuredProducts.css"
export default function FeaturedProducts() {
    // TO DO  kategori Id parametresi alan kategorui detay listesi veren api istenecek, usePasramla alinacak
    // TO DO kategorileri alıp Link tag'ı ile maplenecek,cdinamik olması açısından
    return (
        <div className={"featured-main"}>
            <div className={"featured-nav"}>
                <Link to={`${data[0].id}`}>Shoes</Link>
                <Link to={`${data[1].id}`}>Clothing</Link>
                <Link to={`${data[2].id}`}>Accessories</Link>
            </div>
        </div>

    )
}