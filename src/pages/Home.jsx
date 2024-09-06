import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Hero from './Components/Hero';
import Drive from './Components/Drive';
import Sponsors from './Components/Sponsors';
import QForm from './Components/form';
import Footer from './Components/footer';
import Aboutsec from './Components/Aboutsec';

const  Home = () => {
  return (
    <>
    <div >
      <Nav/>
      {/*<Nav className="z-10 fixed top-0 left-0 w-full" />*/}
      <Hero />
      <Aboutsec className='' />
      <Drive />
      <Sponsors />
      <QForm />
      <Footer />
      </div>
    </>
  );
};

export default Home;
