import React from "react";
import "./Profile.css";
import Photo from "../../images/photo.png";

function Profile(props) {
  return (
    <section className="profile">
      <img className="profile__photo" src={Photo} alt="логотип" />
			<h2 className="profile__fullName">Dan Abramov</h2>
			<p className="profile__name">gaearon</p>
			<div className="profile__social">
				<div className="profile__social-followers">
					<div className="profile__social-followers_icon" />
					<p className="profile__social_number">65.8k followers</p>
				</div>
				<div className="profile__social-following">
					<div className="profile__social-following_icon" />
					<p className="profile__social_number">171 following</p>
				</div>
			</div>
		</section>
  );
}

export default Profile;
