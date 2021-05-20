import React from "react";
import "./Header.css";
import Logo from "../../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="логотип" />
      <form className="header__search-form">
				<label className="header__search-form_field">
					<button className="header__search-button" />
          <input
            className="header__search-form_input"
            type="text"
            name="search"
            placeholder="Enter GitHub username"
            minLength="2"
            maxLength="40"
            // value={}
            // onChange={}
            required
          />
        </label>
      </form>
    </header>
  );
}

export default Header;
