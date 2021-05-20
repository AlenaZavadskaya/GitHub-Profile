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
        const [userData, userRepos] = values;
        console.log("1", userData);
        console.log("2", userRepos);
        setCurrentUser({
          name: userData.name,
          login: userData.login,
          avatar: userData.avatar_url,
          followers: userData.followers,
          following: userData.following,
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
