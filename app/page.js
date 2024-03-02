'use client';

import { register } from 'swiper/element';
import Home from '../src/homepage';

register();

const HomePage = () => {
  return (
    <div className='my-container'>
      <Home />
    </div>
  );
};
export default HomePage;
