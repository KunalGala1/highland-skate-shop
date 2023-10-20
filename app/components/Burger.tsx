'use client';
import { useState } from 'react';

type BurgerProps = {
  isOpen: boolean;
  toggleNav: () => void;
};

const Burger = ({ isOpen, toggleNav }: BurgerProps) => {
  return (
    <div
      className={
        'cursor-pointer space-y-1 transition md:hidden relative z-30' +
        (isOpen ? ' -translate-x-1' : '')
      }
      onClick={toggleNav}
    >
      <div
        className={
          'w-[40px] h-1 bg-slate-100 rounded transition' +
          (isOpen ? ' rotate-45 translate-y-1' : '')
        }
      ></div>
      <div
        className={
          'w-[40px] h-1 bg-slate-100 rounded transition' +
          (isOpen ? ' -rotate-45 -translate-y-1' : '')
        }
      ></div>
    </div>
  );
};
export default Burger;
