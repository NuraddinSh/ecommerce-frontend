import React from "react";
import "../cssPages/productDetails.css"
import RecomendationCarouselComponent from "../components/RecomendationCarouselComponent";

export default function ProductDetails() {
    const x= [1,2,3,4,5,6]
    const sizes=x.map(size => {
        return (
            <div className={"size-box"}>EU 35</div>
        )
    })


    return (
        <div className={"product-detail-main"}>
            <div className={"product-details-hero"}>
                <div className={"imgs-container"}>
                    <div className={"all-pictures"} style={{height: "669px"}}>
                        <div>d</div>
                    </div>
                    <div className={"hero-image"}></div>
                    { /*it will be changed to img tag*/}
                </div>
                <div className={"info-wrapper"}>
                    <div className={"options-info"}>
                        <div>
                            <h2 className={"product-name"}>Item's name</h2>
                            <h3 className={"product-class"}>Item type</h3>
                            <p className={"price-tag"}>price</p>
                        </div>
                        <form>
                            <h4 className={"size-table-legend"}>Numara/beden sec</h4>
                            <div className={"size-table"}>
                                {sizes}
                            </div>
                            <div className={"button-wrapper"}>
                                <button className={"buy-fav-btn buy"}>Sepete ekle</button>
                                <button className={"buy-fav-btn fav"}>Favorite</button>
                            </div>
                        </form>
                        <div>
                            <p>ad About product</p>
                            <ul>
                                <li>Gösterilen renk : black</li>
                            </ul>
                        </div>
                        <div>Ücretsiz kargo ve iade kısmı</div>
                    </div>
                </div>
            </div>
            <RecomendationCarouselComponent />
        </div>
    )
}