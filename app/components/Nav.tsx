"use client";

import NavListItem from "./NavListItem";
import Button from "./Button";
import Link from "next/link";
import Burger from "./Burger";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  };

  const closeNav = () => {
    setNavOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleNav = () => {
    navOpen ? closeNav() : openNav();
  };

  return (
    <nav className="flex relative text-white justify-end px-8 py-4">
      <ul
        className={`md:flex gap-8 items-center ${
          navOpen
            ? "fixed w-screen h-screen bg-slate-950 top-0 left-0 z-30 flex flex-col justify-center items-center transition"
            : "hidden"
        }`}
      >
        <NavListItem href="/" closeNav={closeNav}>
          Home
        </NavListItem>
        <NavListItem href="/about" closeNav={closeNav}>
          About
        </NavListItem>
        <NavListItem href="/services" closeNav={closeNav}>
          Services
        </NavListItem>
        {/* <NavListItem href="/gallery" closeNav={closeNav}>
          Gallery
        </NavListItem> */}
        <NavListItem href="/calendar" closeNav={closeNav}>
          Calendar
        </NavListItem>
        <Button>
          <Link href="/contact" onClick={closeNav}>
            Get In Touch
          </Link>
        </Button>
      </ul>
      <Burger isOpen={navOpen} toggleNav={toggleNav} />
    </nav>
  );
};
export default Nav;
