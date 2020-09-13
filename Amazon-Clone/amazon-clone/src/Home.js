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
                    <Product 
                    title="MEN'S ADIDAS FOOTBALL MESSI CLUB BALL" 
                    rating={5}
                    price={19.99} 
                    image="https://content.adidas.co.in/static/Product-FL7026/MEN_FOOTBALL_BALLS_FL7026_1.jpg.zoom" 
                    />
                    <Product 
                    title="LIONEL MESSI BARCELONA 20/21 AWAY JERSEY BY NIKE" 
                    rating={5}
                    price={99.99} 
                    image="https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1039584000&iset=0108&iindex=0009&retBlank=1x1&l1c=9A7B3E&l1lc=0OB102&l1s=2&l1f=FCBA2021&l1v=MESSI&l1a=1&l2c=9A7B3E&l2lc=0OB302&l2s=10&l2f=FCBA2021&l2v=10&l2a=0" 
                    />

                </div>

                <div className="home__row">
                    <Product 
                    title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" 
                    rating={3}
                    price={59.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" 
                    />
                    
                    <Product 
                    title="Lenovo IdeaPad S540 81XA002SIN 13.3-inch QHD Ultra Thin and Light Laptop,Light Silver" 
                    rating={4}
                    price={1249.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71pdkziNWaL._SL1500_.jpg" 
                    />
                    
                    <Product 
                    title="LG Ultragear 27 240Hz, 1ms, G-Sync Compatible, HDR 10, IPS Display Gaming Monitor" 
                    rating={4}
                    price={449.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91mDvL9j0vL._SL1500_.jpg" 
                    />
                </div>

                <div className="home__row">
                    <Product 
                    title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router" 
                    rating={5}
                    price={159.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61ve2XaWb7L._SL1350_.jpg" 
                    />

                     <Product 
                    title="Hugo Analog Black Dial Men's Watch-1530132" 
                    rating={4}
                    price={230.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61Xb5v20AtL._UL1000_.jpg" 
                    />
                </div>

                <div className="home__row">
                    <Product 
                    title="JBL C105TWS True Wireless in-Ear Headphones with 17 Hours Playtime" 
                    rating={4}
                    price={79.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71r44%2BPoAZL._SL1500_.jpg" 
                    />
                    
                    <Product 
                    title="JBL Tune 600 BTNC On-Ear Wireless Bluetooth Noise Canceling Headphones (Pink)" 
                    rating={4}
                    price={95.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61dfpYRYNHL._SL1500_.jpg" 
                    />  
                    
                    <Product 
                    title="Dymatize Elite 100% Whey Protein Supplement Powder, 5 lbs, 2.26 kg, Café Mocha" 
                    rating={4}
                    price={129.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81v2g6WYLHL._SL1500_.jpg" 
                    />
                </div>

                <div className="home__row">
                    <Product 
                    title="Amazon Brand - Solimo Non-Washable N95 Anti-Pollution Mask, Set of 5" 
                    rating={5}
                    price={11.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71-K6PF15LL._SL1500_.jpg" 
                    />

                    <Product 
                    title="LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)" 
                    rating={5}
                    price={9999.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81s0JxBkzRL._SL1500_.jpg" 
                    />
                </div>
           </div>
        </div>
    )
}

export default Home








