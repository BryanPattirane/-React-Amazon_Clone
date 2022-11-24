import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasketRounded"
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket },dispatch] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/" exact>
        {/* logo on the left -> img*/}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello me</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>                                                      

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
      </div>
      {/* Basket icon with number*/}
      <Link to="/checkout" className="header__link">
      <div className="header__optionBasket">
        {/* Shopping basket icon */}
        <ShoppingBasketIcon/>
        {/* Number of item on basket */}
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
      </div>
      </Link>
    </nav>
  );
}

export default Header;
