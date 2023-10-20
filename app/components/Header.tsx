'use client';
import { useEffect, useState } from 'react';
import FigureSkatingBlade from './FigureSkatingBlade';
import Nav from './Nav';
import Image from 'next/image';
import { debounce } from 'lodash';

const Header = () => {
  const [stickyTop, setStickyTop] = useState<number>(0);

  const handleResize = () => {
    const headerHeight = document.querySelector('header')?.clientHeight;
    const navHeight = document.querySelector('nav')?.clientHeight;
    if (!headerHeight || !navHeight) return;
    setStickyTop((headerHeight - navHeight) * -1);
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 100));

    handleResize();

    return () => {
      window.removeEventListener('resize', debounce(handleResize, 100));
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.top = `${stickyTop}px`;
    }
  }, [stickyTop]);

  return (
    <header className='shadow sticky z-30'>
      {/* Figure Skating Blade Graphic */}
      <FigureSkatingBlade />
      <Image
        src={'/wave-haikei.svg'}
        height={100}
        width={500}
        alt={'Wave graphic by Haiku'}
        className='w-full scale-105 absolute bottom-0 left-0 h-2/3 object-cover'
      ></Image>
      {/* Navigation */}
      <Nav />
    </header>
  );
};
export default Header;
