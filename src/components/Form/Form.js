import React from 'react';
import './Form.css';

export const Form = ({ value, onChange, onClick }) => {
  return (
    <div className="form">
      <h1 className="main-heading">Meal Search</h1>
      <p className="desc">
        Search for any meal you want to get the recipe for it
      </p>
      <div className="inputs">
        <input
          type="text"
          name="text"
          placeholder="Enter Your Meal Here"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="food-input"
        />
        <input
          type="submit"
          name="submit"
          onClick={onClick}
          className="search-button"
        />
      </div>
    </div>
  );
};
