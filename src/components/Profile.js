import React from 'react';
import '../styles/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile-object">
      <div className="circle-profile">
        <p className="circle-profile-text">
          <Link to="/dashboard">Profile</Link>
        </p>
      </div>
    </div>
  );
}

export default Profile;
