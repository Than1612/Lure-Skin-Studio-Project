import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(response.data);
      } catch (err) {
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-center">
          {error && (
            <div className="text-center border-2 border-red-600 p-2 mb-4 rounded-md bg-red-100 shadow-md">
              {error}
            </div>
          )}
          {user ? (
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
              <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
              <div className="mb-4">
                <strong>Full Name: </strong>
                {user.name}
              </div>
              <div className="mb-4">
                <strong>Email Address: </strong>
                {user.email}
              </div>
              <div className="mb-4">
                <strong>Address: </strong>
                {user.address}
              </div>
              <div className="mb-4">
                <strong>Phone Number: </strong>
                {user.phone}
              </div>
            </div>
          ) : (
            <div className="text-xl">Loading...</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;



/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg mt-10">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center mb-2">{user.name}</h2>
        <p className="text-gray-700 text-base mb-4">Email: {user.email}</p>
        <p className="text-gray-700 text-base mb-4">Address: {user.address}</p>
        <p className="text-gray-700 text-base mb-4">Phone: {user.phone}</p>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/user/profile');
        setUser(response.data);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-page">
      {user ? <ProfileCard user={user} /> : <div>No user data available</div>}
    </div>
  );
};

export default ProfilePage;
*/