import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bagian1 from './components/Bagian1/Bagian1';
import Bagian2 from './components/Bagian2/Bagian2';
import Bagian3 from './components/Bagian3/Bagian3';
import Bagian4 from './components/Bagian4/Bagian4';

export default function App() {
  return (
    <div>
      <Navbar />
      <Bagian1 />
      <Bagian2 />
      <Bagian3 />
      <Bagian4 />
    </div>
  );
}
