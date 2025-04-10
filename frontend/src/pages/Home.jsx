import React from "react";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";


const Shop = () => {
    return ( 
        <div>
            <Hero/>
            <Offers/>
            <NewCollections/>
        </div>
     );
}
 
export default Shop;