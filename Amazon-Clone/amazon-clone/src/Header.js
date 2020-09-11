import React from 'react'
//import "./Header.$(selector).css(propertyName);"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" /> 
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello User
                    </span>
                    
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>

                    <span className="header__optionLineTwo">
                        And Orders
                    </span>
                </div>
                
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>

                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__cartCount">
                        0
                    </span>
                </div>

            </div>        
        </div>
    )
}

export default Header
