// components/ui/featureCard.js
import Image from 'next/image';
import clsx from 'clsx'; //legibilidade

type FeatureCardProps = {
  title: string;
  icon: string;
  secondaryIcon?: string;
  alignment?: 'left' | 'right' | 'center';
  children: React.ReactNode;
};

export default function FeatureCard({
  title,
  icon,
  secondaryIcon,
  alignment = 'left',
  children,
}: FeatureCardProps) {
  const containerClasses = clsx(
    'w-full flex mt-8',
    {
      'justify-start': alignment === 'left',
      'justify-end': alignment === 'right',
    }
  );

  const cardClasses = clsx(
    'bg-white flex flex-col items-start justify-between text-left lg:rounded-lg',
    'w-full sm:w-2/3 md:max-w-full md:w-1/2 p-4 gap-4',
    {
      'rounded-r-lg': alignment === 'left',
      'rounded-l-lg': alignment === 'right',
      'rounded-lg mx-auto py-10': alignment === 'center',
    }
  );

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        {/* Cabeçalho do Card */}
        <div className={`flex flex-row items-center gap-4 w-full ${alignment === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Image
            alt={`${title} icon`}
            src={icon}
            className='w-6 h-6 md:w-8 md:h-8 flex-shrink-0'
          />
          <h2 className="text-3xl text-[var(--purple)]">
            {title}
          </h2>
          {secondaryIcon && (
            <Image
              alt="Decorative icon"
              src={secondaryIcon}
              className='w-6 h-6 md:w-8 md:h-8'
            />
          )}
        </div>

        {/* Corpo do Card (conteúdo passado via children) */}
        <div className={`flex flex-col rounded-xl w-full gap-4 ${alignment === 'center' ? 'justify-center max-w-[300px] mx-auto' : 'items-start justify-start'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}