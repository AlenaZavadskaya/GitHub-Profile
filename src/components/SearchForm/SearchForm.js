import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
	const [userName, setUserName] = useState("");
	const [error, setError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);

  function handleSearch(e) {
		setUserName(e.target.value);
		if (e.target.value.length === 0) {
			setError("Нужно ввести запрос");
    } else {
      setError("");
    }
  }

	function handleSubmit(e) {
		e.preventDefault();
		setError("");
    props.onGetUserName(userName);
    setUserName("");
	}
	
	React.useEffect(() => {
    if (userName && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [userName, error]);

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-form__field">
          <button
            type="submit"
            className="search-form__button"
						onClick={handleSubmit}
						disabled={!formValid}
          />
          <input
            className="search-form__input"
            type="text"
            name="search"
						placeholder="Enter GitHub username"
						minLength="1"
            maxLength="40"
            value={userName}
            onChange={handleSearch}
            required
          />
        </label>
			</form>
  );
}

export default SearchForm;
