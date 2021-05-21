import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import * as api from "./Api";
import CurrentUserContext from "../src/contexts/CurrentUserContext";
import React, { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [repos, setRepos] = useState([]);
  // const [isLoading, setIsLoading] = React.useState(false);

  function getUserName(username) {
    Promise.all([api.getUserInfo(username), api.getUserRepos(username)])
      .then((values) => {
        const [user, userRepos] = values;
        setCurrentUser({
          name: user.name,
          login: user.login,
          avatar: user.avatar_url,
          followers: user.followers,
          following: user.following,
          link: user.html_url,
        });
        setRepos(userRepos);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header onGetUserName={getUserName} />
      <Main user={currentUser} repos={repos} />
    </CurrentUserContext.Provider>
  );
}

export default App;
