import React from 'react';
import Image from 'next/image';
import glass from 'public/assets/icons/magGlass.svg';
import Button from 'components/button';

export default function Page() {
  return (
    <div>
      <section className="bg-[url('/assets/background/grid.svg')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center">
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
      </section>
    </div>
  );
}