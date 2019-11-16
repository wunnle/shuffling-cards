import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShufflingCards from './ShufflingCards';


const arr = [
  'https://cdn.dribbble.com/users/989466/screenshots/6493524/uniblitz-application-icons-dribbble-alex-pasquarella_2x.png',
  'https://cdn.dribbble.com/users/1626229/screenshots/6467647/the-wind-of-change.jpg',
  'https://cdn.dribbble.com/users/15687/screenshots/6480282/hovercar-drib_2x.png',
  'https://cdn.dribbble.com/users/989466/screenshots/6493524/uniblitz-application-icons-dribbble-alex-pasquarella_2x.png',
  'https://cdn.dribbble.com/users/1626229/screenshots/6467647/the-wind-of-change.jpg',
  'https://cdn.dribbble.com/users/15687/screenshots/6480282/hovercar-drib_2x.png'
]

function App() {
  const [targetImg, setTargetImg] = useState(0);

  const length = 6
  const imgs = arr.slice(0, length)

  return (
    <div className='page'>
      <ul className='links'>
        <li onMouseEnter={() => setTargetImg(0)}>Go to 0</li>
        <li onMouseEnter={() => setTargetImg(5)}>Go to 5</li>
        <li onMouseEnter={() => setTargetImg(4)}>Go to 4</li>
        <li onMouseEnter={() => setTargetImg(3)}>Go to 3</li>
        <li onMouseEnter={() => setTargetImg(2)}>Go to 2</li>
        <li onMouseEnter={() => setTargetImg(1)}>Go to 1</li>
      </ul>
      <ShufflingCards
        targetImg={targetImg}
        arr={imgs} />
    </div>
  );
}

export default App;
