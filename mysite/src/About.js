import React from 'react';
import { Header } from './Header';
import { Particles } from './Particles';
export const About = () => {
  return (
    <div className="body">
      <div className="background">
        <div className="App">
          <Header></Header>

          <Particles />
        </div>
      </div>
    </div>
  );
};