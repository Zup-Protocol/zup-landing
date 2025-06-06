
import React from 'react';
import Image from 'next/image';
import Button from 'components/button';
import FloatingIcon from 'components/floatingIcon';

import glass from 'public/assets/icons/magGlass.svg';
import token1 from 'public/assets/icons/tokenPancake.svg';
import token2 from 'public/assets/icons/tokenBlack.svg';
import token3 from 'public/assets/icons/tokenCVG.svg';
import token4 from 'public/assets/icons/tokenJoe.svg';
import token5 from 'public/assets/icons/tokenRounded.svg';
import token6 from 'public/assets/icons/tokenUni.svg';
import wave from 'public/assets/background/wave.svg';

const tokens = [
  { name: 'Pancake', icon: token1, x: 45, y: 70 },
  { name: 'Black', icon: token2, x: 75, y: 5 },
  { name: 'CVG', icon: token3, x: 60, y: 30 },
  { name: 'Joe', icon: token4, x: 15, y: 80 },
  { name: 'Rounded', icon: token5, x: 85, y: 60 },
  { name: 'Uni', icon: token6, x: 5, y: 18 },
];

export default function Page() {
  return (
    <div>
      <section className="relative bg-[url('/assets/background/grid.svg')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center">
        <div className='flex flex-col justify-center gap-4 text-center'>
          <div className='gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl'>
            <h1 className="w-full text-[var(--black)]">
              Too Many Pools,
            </h1>
            <h1 className="w-full bg-gradient-to-b from-[var(--black)] to-[var(--gray)] bg-clip-text text-transparent">
              Too Little Time...
            </h1>
          </div>
          <p>
            <span>
              <Image
                src={glass}
                alt="Magnifying Glass"
                width={30}
                height={30}
                className="inline-block mr-2 w-6"
              />
            </span>
            Deposit in the best Liquidity Pool in less than a minute.
          </p>
          <div>
            <Button text={'Try it now'} url={''} variant={1} />
          </div>
        </div>
        <div>
          {tokens.map((token, index) => (
            <FloatingIcon
              key={index}
              icon={token.icon}
              x={token.x}
              y={token.y}
              index={index}
              alt={`${token.name} token icon`}
            />
          ))}
        </div>
      </section>
      <section className="relative w-full md:-mt-44">
        <Image
          src={wave}
          alt="Wave Background"
          className="w-full h-full md:drop-shadow-[0px_-50px_1px_rgba(137,121,242,1)]"
        />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md'>
          <div className='flex flex-col items-center justify-center gap-4 text-center'>

          </div>
        </div>
      </section>
    </div>
  );
} 