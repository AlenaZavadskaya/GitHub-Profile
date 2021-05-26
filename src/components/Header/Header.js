import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/Vector.svg";
import SearchForm from "../SearchForm/SearchForm";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="логотип" />
      </Link>
      <SearchForm onGetUserName={props.onGetUserName} />
    </header>
  );
}

export default Header;
