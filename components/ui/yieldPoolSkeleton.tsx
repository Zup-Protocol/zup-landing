// components/skeletons/YieldPoolSkeleton.js
import React from 'react';
import Image from 'next/image';
import crypto from 'public/assets/icons/crypto.svg';

export default function YieldPoolSkeleton() {
  return (
    <div className="w-full flex items-center justify-start gap-3 border border-gray-100 rounded-lg p-3 bg-white">
      <div className='flex relative w-9'>
        <Image alt="Token 1 placeholder" src={crypto} width={24} height={24} className="opacity-50" />
        <Image alt="Token 2 placeholder" src={crypto} width={24} height={24} className='left-[12px] absolute opacity-50' />
      </div>
      <div className="h-5 w-28 bg-gray-200 rounded-md animate-pulse"></div>
      <div className='flex items-center justify-center gap-2 ml-auto'>
        <Image alt="DEX icon placeholder" src={crypto} width={20} height={20} className="opacity-50" />
        <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}