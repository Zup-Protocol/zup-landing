import Image from 'next/image';
import icon from '../../public/assets/icons/drop.svg';

export default function CenteredCard() {
  return (
    <div>
      <div className='flex flex-row items-center justify-start gap-4 w-full'>
        <Image
          alt={`drop icon`}
          src={icon}
          className='w-8 h-8 md:w-10 md:h-10 flex-shrink-0'
        />
        <h2 className="text-3xl text-[var(--purple)]">
          Deposit.
        </h2>

      </div>
      <div></div>
      <div></div>
    </div>
  );
}