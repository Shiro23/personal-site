import React from 'react';
import './About.css';
import './AboutAnimation.scss';
import photo from './images/photo.png';
import { useHistory } from 'react-router';

export const About = () => {
  let history = useHistory();

  return (
    <div className="about-page">
      <h1 className="about-title">Hi I am Carlo, Welcome to my site!</h1>
      <img className="curve" src={photo} alt="curve"></img>
      <p className="about-paragraph">
        I've always wanted to work in the gaming industry, but I could not decide wether as an artist, a designer or even as a voice actor!
      </p>
      <p className="about-paragraph">
        One day when I was 14 I picked up an old copy of Deitel's "C How to program" and instantly
        fell in love with coding.
      </p>
      <p className="about-paragraph">
        Soon later I moved to C++, my favourite programming language to date.
        After highscool I started University and opted for Computer Engineering,
        because I liked the idea of an extensive Math and Physics background.
      </p>
      <p className="about-paragraph">
        Through classes I learned a variety of programming concepts, languages and techniques,
        and how to apply them in different contexts.
        All the while in my free time I started tinkering more with engines and libraries,
        developing simple games as a hobby.
      </p>
      <p className="about-paragraph">
        After graduating I started working in the Development Team of my current company.
        As of now I am specialized in Front-End and Web development, in particular with React.js and Office.js. 
      </p>
      <p className="about-paragraph" onClick={() => history.push("links")}>
        Click here if you want to get in contact!
      </p>
    </div>
  );
};
