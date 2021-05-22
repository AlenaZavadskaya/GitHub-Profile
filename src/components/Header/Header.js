import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/Vector.svg";

function Header(props) {
  const [userName, setUserName] = useState("");

  function handleSearch(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onGetUserName(userName);
    setUserName("");
  }

  return (
    <header className="header">
      <Link to="/"><img className="header__logo" src={Logo} alt="логотип" /></Link>
      <form className="header__search-form" onSubmit={handleSubmit}>
        <label className="header__search-form_field">
          <button
            type="submit"
            className="header__search-button"
            onClick={handleSubmit}
          />
          <input
            className="header__search-form_input"
            type="text"
            name="search"
            placeholder="Enter GitHub username"
            minLength="2"
            maxLength="40"
            value={userName}
            onChange={handleSearch}
            required
          />
        </label>
      </form>
    </header>
  );
}

export default Header;
