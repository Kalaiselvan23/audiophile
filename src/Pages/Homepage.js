import React from 'react'
import Products from '../components/Homepage/Products'
import Xx99 from '../components/Homepage/Xx99';
import Advertisement from "../components/Homepage/Advertisement.js";
import Compliment from "../components/Homepage/Compliment";
import Footer from "../components/Homepage/Footer.js";
import Navbar from '../components/Navbar';

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Xx99/>
      <Products/>
      <Advertisement/>
      <Compliment/>
      <Footer/>
    </div>
  )
}
