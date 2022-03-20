import React from 'react';
import MultiplePizzas from '../assests/making.jpg';
import '../styles/About.css';

function About() {
  return (
  <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
          <h1>ABOUT US</h1>
          <p> Likki's Burger was founded in 1958 by brothers Dan and Frank Carney in their hometown of Wichita, 
            Kansas. When a friend suggested opening a burger parlor—then a rarity—they agreed that the idea could 
            prove successful, and they borrowed 600/- from their mother to start a business with partner John Bender.
            Renting a small building at 503 South Bluff in downtown Wichita and purchasing secondhand equipment to 
            make burgers, the Carneys and Bender opened the first burger Hut restaurant; on opening night, they gave 
            burger away to encourage community interest. A year later, in 1959, lakki burger was incorporated in Kansas,
            and Dick Hassur opened the first franchise unit in Topeka, Kansas.

          </p>
      </div>
  </div>
  );
}

export default About;
