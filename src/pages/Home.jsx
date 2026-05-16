import React from 'react';
import Hero from '../components/sections/Hero';
import Lineage from '../components/sections/Lineage';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Services from '../components/sections/Services';
import YouTubeFeed from '../components/sections/YouTubeFeed';
import PageTransition from '../components/layout/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Lineage />
      <FeaturedProducts />
      <Services />
      <YouTubeFeed />
    </PageTransition>
  );
};

export default Home;
