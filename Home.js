// Home.js
import React from 'react';
import './index.css';
const Home = () => {
  return (
    <div>
      <h1>Welcome to Notefy.in</h1>
      <p>Choose your role:</p>
      <button className="btn btn-primary mr-2">I am a student</button>
      <button className="btn btn-success">I am an expert</button>
    </div>
  );
};

export default Home;
