import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import * as api from "./Api";
import CurrentUserContext from "../src/contexts/CurrentUserContext";
import NotFound from "./components/NotFound/NotFound";
import InitialState from "./components/InitialState/InitialState";
import Loader from "./components/Loader/Loader";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getUserName(username) {
    setIsLoading(true);
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
        setIsLoading(false);
        history.push("/profile");
      })
      .catch((err) => {
        if (err === 404) {
          setIsLoading(false);
          history.push("*");
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header onGetUserName={getUserName} />
      <Switch>
        <Route exact path="/">
          {isLoading ? <Loader /> : <InitialState />}
        </Route>
        <Route path="/profile">
          {isLoading ? (
            <Loader />
          ) : (
            <Main user={currentUser} repos={repos} isLoading={isLoading} />
          )}
        </Route>
        <Route path="*">{isLoading ? <Loader /> : <NotFound />}</Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
