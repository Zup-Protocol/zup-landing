import React from 'react';
import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

import logo from 'public/assets/icons/logo.svg';
import arrow from 'public/assets/icons/arrowDown.svg';

const link = [
  {
    name: 'About',
    url: '',
  },
  {
    name: 'Socials',
    url: '',
  },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className='md:w-[33%] flex items-center gap-1 text-[var(--black)]'>
          <Image src={logo} alt={""} />
          <span className="text-2xl font-bold">Zup</span>
        </div>
        <div className='hidden md:w-[33%] justify-center md:flex items-center gap-4 text-[var(--purple)] font-semibold '>
          {link.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="flex items-center gap-1 justify-center hover:text-[var(--purple-dark)] transition-colors duration-200"
            >
              {item.name}
              <Image src={arrow} alt='' />
            </Link>
          ))}
        </div>
        <div className='md:w-[33%] flex items-center justify-end'>
          <Button variant={'primary'} text="Launch App" url="" />
        </div>
      </div>
    </nav>
  );
}