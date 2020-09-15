import React from 'react'
//import "./Header.$(selector).css(propertyName);"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

    const [{cart}] = useStateValue();

    return (
        <div className="header">
            <Link to="/"> 

                <img className="header__logo" 
                src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" 
                alt=""/>
                
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" /> 
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello User
                    </span>
                    <Link to="/login">
                        <span className="header__optionLineTwo header__signin">
                            Sign In
                        </span>
                    </Link>
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

                
                    <Link to="/checkout" className="cart__link">
                        <div className="header__optionCart">
                            <ShoppingCartIcon />
                            <span className="header__optionLineTwo header__cartCount">
                                   {cart?.length}
                            </span>
                        </div>

                    </Link>
                    

            </div>        
        </div>
    )
}

export default Header
