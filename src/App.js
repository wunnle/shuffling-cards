import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShufflingCards from './ShufflingCards';

function App() {
  return (
    <ShufflingCards arr={[
      'https://cdn.dribbble.com/users/989466/screenshots/6493524/uniblitz-application-icons-dribbble-alex-pasquarella_2x.png',
      'https://cdn.dribbble.com/users/1626229/screenshots/6467647/the-wind-of-change.jpg',
      'https://cdn.dribbble.com/users/15687/screenshots/6480282/hovercar-drib_2x.png'
    ]} />
  );
}

export default App;
