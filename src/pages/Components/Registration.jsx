import React, { useState } from 'react';
import './styles.css'; // Ensure styles.css is imported
import { db } from './firebase'; // Import Realtime Database instance
import { ref, set, push } from 'firebase/database';

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    leader: { name: '', roll: '', year: '', email: '' },
    member2: { name: '', roll: '', year: '', email: '' },
    member3: { name: '', roll: '', year: '', email: '' },
    member4: { name: '', roll: '', year: '', email: '' },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, field] = name.split('-');
    setFormData((prev) => {
      if (field) {
        return { ...prev, [key]: { ...prev[key], [field]: value } };
      }
      return { ...prev, [key]: value };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTeamRef = push(ref(db, 'teams')); // Create a unique ID for the new team
      await set(newTeamRef, formData); // Write data to Realtime Database
      alert('Team Registered Successfully!');
    } catch (error) {
      console.error('Error adding data: ', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h1 className="custom-heading">WDS 10.0 Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Enter Team Name"
              required
              onChange={handleChange}
            />
          </div>

          <h2 className="custom-head">Team Leader Details</h2>
          <div className="form-group">
            <label htmlFor="leader-name">Name</label>
            <input
              type="text"
              id="leader-name"
              name="leader-name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leader-roll">Roll Number</label>
            <input
              type="text"
              id="leader-roll"
              name="leader-roll"
              placeholder="Enter Roll Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leader-year">Year</label>
            <input
              type="text"
              id="leader-year"
              name="leader-year"
              placeholder="Enter Year"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="leader-email">Email</label>
            <input
              type="email"
              id="leader-email"
              name="leader-email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <h2 className="custom-head">Member 2 Details</h2>
          <div className="form-group">
            <label htmlFor="member2-name">Name</label>
            <input
              type="text"
              id="member2-name"
              name="member2-name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member2-roll">Roll Number</label>
            <input
              type="text"
              id="member2-roll"
              name="member2-roll"
              placeholder="Enter Roll Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member2-year">Year</label>
            <input
              type="text"
              id="member2-year"
              name="member2-year"
              placeholder="Enter Year"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member2-email">Email</label>
            <input
              type="email"
              id="member2-email"
              name="member2-email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <h2 className="custom-head">Member 3 Details</h2>
          <div className="form-group">
            <label htmlFor="member3-name">Name</label>
            <input
              type="text"
              id="member3-name"
              name="member3-name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member3-roll">Roll Number</label>
            <input
              type="text"
              id="member3-roll"
              name="member3-roll"
              placeholder="Enter Roll Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member3-year">Year</label>
            <input
              type="text"
              id="member3-year"
              name="member3-year"
              placeholder="Enter Year"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member3-email">Email</label>
            <input
              type="email"
              id="member3-email"
              name="member3-email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <h2 className="custom-head">Member 4 Details</h2>
          <div className="form-group">
            <label htmlFor="member4-name">Name</label>
            <input
              type="text"
              id="member4-name"
              name="member4-name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member4-roll">Roll Number</label>
            <input
              type="text"
              id="member4-roll"
              name="member4-roll"
              placeholder="Enter Roll Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member4-year">Year</label>
            <input
              type="text"
              id="member4-year"
              name="member4-year"
              placeholder="Enter Year"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="member4-email">Email</label>
            <input
              type="email"
              id="member4-email"
              name="member4-email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit">Register Team</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
