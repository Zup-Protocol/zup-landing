import Image from 'next/image';
import Link from 'next/link';
import Button from './button';

import { appUrl } from 'core/constants';
import logo from 'public/assets/icons/logo.svg';

const link = [
  {
    name: 'FAQ',
    url: 'https://zupprotocol.gitbook.io/documentation/general/faq',
  },
  {
    name: 'Docs',
    url: 'https://zupprotocol.gitbook.io/documentation',
  },
    {
    name: 'Newsletter',
    url: 'https://zupprotocol.substack.com/',
  },
      {
    name: 'Contact us',
    url: 'https://zupprotocol.gitbook.io/documentation/other/contact-us',
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
        <div className='hidden md:w-[53%] justify-center md:flex items-center gap-10 text-[var(--purple)] font-medium '>
  {link.map((item, index) => (
    <Link
      key={index}
      href={item.url}
      passHref
      legacyBehavior
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 justify-center hover:text-[var(--purple-dark)] hover:font-semibold transition-colors duration-200"
      >
        {item.name}
      </a>
    </Link>
  ))}
        </div>
        <div className='md:w-[33%] flex items-center justify-end'>
          <Button variant={'primary'} text="Launch App" url={appUrl} />
        </div>
      </div>
    </nav>
  );
}