import React, { useState } from 'react';

const BloodAlcoholCalculator = () => {
  const [weight, setWeight] = useState('');
  const [beerCount, setBeerCount] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [bac, setBac] = useState(0);

  const calculateBAC = () => {
    let liters = beerCount * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let remaining = grams - (burning * time);

    let genderFactor = gender === 'male' ? 0.7 : 0.6;
    let bac = remaining / (weight * 10 * genderFactor);
    setBac(bac < 0 ? 0 : (bac * 1000).toFixed(3));
  };

  const beerOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const timeOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h2>Blood Alcohol Calculator</h2>
      <div>
        <label htmlFor="weight">Weight (in kg): </label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="beerCount">Number of beer bottles consumed (0,33 liters each):</label>
        <select
          id="beerCount"
          value={beerCount}
          onChange={e => setBeerCount(e.target.value)}
        >
          {beerOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="time">Time since first drink (in hours):</label>
        <select
          id="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          {timeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          <label htmlFor="male">Female</label>
        </div>
      </div>
      <button onClick={calculateBAC}>Calculate BAC</button>
      {bac > 0 ? <p>Your BAC is: {bac} ‰</p> : null}
    </div>
  );
};
export default BloodAlcoholCalculator
