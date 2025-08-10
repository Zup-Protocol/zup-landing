'use client';
import { motion } from 'framer-motion';
import { useWindowSize } from 'hooks/useWindowSize';

import group from 'public/assets/icons/group.svg';
import glass from 'public/assets/icons/magGlass.svg';
import stars from 'public/assets/icons/stars.svg';
import drop from '../../public/assets/icons/drop.svg';

import Button from 'components/ui/button';
import FeatureCard from 'components/ui/featureCard';
import ParabolicDiv from 'components/ui/parabolic';
import TokenSelectorSkeleton from 'components/ui/tokenSelectorSkeleton';
import YieldPoolSkeleton from 'components/ui/yieldPoolSkeleton';
import { appUrl } from 'core/constants';

const cardVariantsLeft = {
  offscreen: {
    x: -100, // Começa 100px para a esquerda
    opacity: 0,
  },
  onscreen: {
    x: 0, // Posição final
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

// Animação para o card que vem da direita
const cardVariantsRight = {
  offscreen: {
    x: 100, // Começa 100px para a direita
    opacity: 0,
  },
  onscreen: {
    x: 0, // Posição final
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

const cardVariantsTop = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

export default function CardsSection() {
  const { width } = useWindowSize();

  return (
    <>
      <ParabolicDiv width={width} height={100} orientation='wave' />
      <section className="relative w-full pt-20 lg:pt-32 bg-[linear-gradient(to_bottom,_var(--purple)_20%,_var(--purple-light)_50%,_white_100%)]">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariantsTop} className='max-w-7xl mx-auto text-center mb-16'>
          <h2 className='text-white text-4xl'>It can take just three simple steps</h2>
          <span className='text-white/70 text-xl'>To start earning from the best liquidity pool</span>
        </motion.div>
        <div className='max-w-7xl mx-auto'>
          <div className="mx-auto relative flex flex-col gap-8 overflow-x-hidden">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariantsLeft}
            >
              <FeatureCard title="Choose the tokens" icon={group} alignment="left">
                <TokenSelectorSkeleton />
                <TokenSelectorSkeleton isUSDC/>
              </FeatureCard>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariantsRight}
            >
              <FeatureCard
                title="Get the best yields"
                icon={glass}
                secondaryIcon={stars}
                alignment="right"
              >
                <div className="h-5 w-40 bg-gray-200 rounded-md animate-pulse"></div>
                <YieldPoolSkeleton />
                <YieldPoolSkeleton isUniswap={false} />
              </FeatureCard>
            </motion.div>


            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariantsLeft}
            >
              <FeatureCard title="Deposit." icon={drop} alignment="center">
                <TokenSelectorSkeleton type='center' />
                <TokenSelectorSkeleton type='center' isUSDC/>
                <Button text={"Deposit"} url={appUrl} variant={''} />
              </FeatureCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}