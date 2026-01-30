import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NotAverageRealtor from '../components/NotAverageRealtor';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import OurProjects from '../components/OurProjects';
import HappyClients from '../components/HappyClients';
import CallToAction from '../components/CallToAction';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NotAverageRealtor />
        <WhyChooseUs />
        <AboutUs />
        <OurProjects />
        <HappyClients />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

