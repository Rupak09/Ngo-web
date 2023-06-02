import React from 'react'
import Images from './components/imgss/Images'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import ImgCarousel from './components/carousel/ImgCarousel'
import Footer from './components/footer/Footer'
import Selects from './components/selects/Selects';
import SelectsImg from './components/SelectsImg/SelectsImg'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Images />
      <ImgCarousel />
      <Footer />
      <Selects />
      <SelectsImg />
    </div>
  );
}

export default App;
