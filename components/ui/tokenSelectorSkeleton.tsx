import Image from 'next/image';
import crypto from 'public/assets/icons/crypto.svg';
import usdc from 'public/assets/icons/usdc.svg';

export default function TokenSelectorSkeleton({ type = 'default', isUSDC = false }) {
  const types = {
    default: "justify-start",
    secondary: "flex-row-reverse justify-between",
    center: "flex-row-reverse justify-between",
  };

  return (
    <div className={`w-full flex items-center gap-3 border border-gray-100 rounded-lg p-3 bg-white ${types[type]}`}>
      <Image
        alt="Token icon placeholder"
        src={isUSDC ? usdc : crypto}
        width={24}
        height={24}
      />
      <div className="h-5 w-32 bg-gray-200 rounded-md animate-pulse"></div>
    </div>
  );
}