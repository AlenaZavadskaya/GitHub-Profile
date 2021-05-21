import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <section className="profile">
      <img
        className="profile__photo"
        style={{
          backgroundImage: `url(${props.avatar})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        src={props.avatar}
        alt={props.name}
      />
      <h2 className="profile__fullName">{props.name}</h2>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="profile__name"
      >
        {props.login}
      </a>
      <div className="profile__social">
        <div className="profile__social-followers">
          <div className="profile__social-followers_icon" />
          <p className="profile__social_number">{props.followers} followers</p>
        </div>
        <div className="profile__social-following">
          <div className="profile__social-following_icon" />
          <p className="profile__social_number">{props.following} following</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
