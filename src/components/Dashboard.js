import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { auth, db, logout } from '../firebase';

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  });

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="profile-object-dashboard">
          <div className="profile-circle-dashboard">
            <p className="profile-circle-text-dashboard">Profile Page</p>
          </div>
        </div>
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button type="button" className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
