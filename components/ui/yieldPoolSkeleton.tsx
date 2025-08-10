// components/skeletons/YieldPoolSkeleton.js
import Image from 'next/image';
import crypto from 'public/assets/icons/crypto.svg';
import pancakeSwap from 'public/assets/icons/pancakeswap.svg';
import uniswap from 'public/assets/icons/uniswap.svg';
import usdc from 'public/assets/icons/usdc.svg';

export default function YieldPoolSkeleton({isUniswap = true}) {
  return (
    <div className="w-full flex items-center justify-start gap-3 border border-gray-100 rounded-lg p-3 bg-white">
      <div className='flex relative w-9'>
        <Image alt="Token 1 placeholder" src={crypto} width={24} height={24} />
        <Image alt="Token 2 placeholder" src={usdc} width={24} height={24} className='left-[12px] absolute' />
      </div>
      <div className="h-5 w-28 bg-gray-200 rounded-md animate-pulse"></div>
      <div className='flex items-center justify-center gap-2 ml-auto'>
        <Image alt="DEX icon placeholder" src={isUniswap ? uniswap : pancakeSwap} width={20} height={20} />
        <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}