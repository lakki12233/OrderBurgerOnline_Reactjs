import React from 'react';
import {Link} from 'react-router-dom'
import pic from '../assests/burger11.jpg'
import '../styles/Home.css'

function Home() {
  return ( 
   <div className='home' style={{backgroundImage: `url(${pic})` }}>
       <div className='headerContainer' >
          <h1>Lakki's Burger</h1>
          <p>BURGER LIKE ESLE WHERE</p>
          <Link to="/menu">
          <button>ORDER NOW</button>
          </Link>
       </div>
      
   </div>
  );
}

export default Home;
