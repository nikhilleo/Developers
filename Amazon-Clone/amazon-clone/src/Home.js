import React from 'react'
//import "./Home.$(selector).css(propertyName);
import "./Home_style.css"
import Product from "./Product";


function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"   
               alt="" 
               />
            
                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />   
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
           </div>
        </div>
    )
}

export default Home








