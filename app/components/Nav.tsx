'use client';

import NavListItem from './NavListItem';
import Button from './Button';
import Link from 'next/link';
import Burger from './Burger';
import { useState } from 'react';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    if (navOpen) {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav className='flex relative text-white justify-end p-8'>
      <ul
        className={`md:flex gap-8 items-center ${
          navOpen
            ? 'fixed w-screen h-screen bg-slate-950 top-0 left-0 z-10 flex flex-col justify-center items-center transition'
            : 'hidden'
        }`}
      >
        <NavListItem href='/' toggleNav={toggleNav}>
          Home
        </NavListItem>
        <NavListItem href='/about' toggleNav={toggleNav}>
          About
        </NavListItem>
        <NavListItem href='/services' toggleNav={toggleNav}>
          Services
        </NavListItem>
        <NavListItem href='/calendar' toggleNav={toggleNav}>
          Calendar
        </NavListItem>
        <Button>
          <Link href='/contact'>Get In Touch</Link>
        </Button>
      </ul>
      <Burger isOpen={navOpen} toggleNav={toggleNav} />
    </nav>
  );
};
export default Nav;
