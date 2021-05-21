import React from "react";
import Card from "../Card/Card";
import "../Card/Card.css";
import Profile from "../Profile/Profile";
import "../Profile/Profile.css";
import "./Main.css";

function Main(props) {
  return (
    <section className="main">
      <Profile
        name={props.user.name}
        login={props.user.login}
        avatar={props.user.avatar}
        followers={props.user.followers}
				following={props.user.following}
				link={props.user.link}
      />
      <div className="main__container">
        <h1 className="main__header">Repositories ({props.repos.length})</h1>
        {props.repos.map((repo) => (
          <Card
            repo={repo}
            title={repo.name}
            description={repo.description}
						link={repo.html_url}
						key={repo.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Main;
