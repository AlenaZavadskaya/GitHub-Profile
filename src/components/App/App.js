import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as api from "../../Api";
import NotFound from "../NotFound/NotFound";
import InitialState from "../InitialState/InitialState";
import Loader from "../Loader/Loader";

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
    Promise.all([api.getUserInfo(username), api.getUserRepos(username, 1)])
      .then((values) => {
        const [user, userRepos] = values;
        setCurrentUser({
          name: user.name,
          login: user.login,
          avatar: user.avatar_url,
          followers: user.followers,
          following: user.following,
          link: user.html_url,
          repositories: user.public_repos,
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
    <>
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
    </>
  );
}

export default App;
