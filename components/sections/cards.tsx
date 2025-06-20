import group from 'public/assets/icons/group.svg';
import stars from 'public/assets/icons/stars.svg';
import glass from 'public/assets/icons/magGlass.svg';

import TokenSelectorSkeleton from 'components/ui/tokenSelectorSkeleton';
import YieldPoolSkeleton from 'components/ui/yieldPoolSkeleton';
import FeatureCard from 'components/ui/featureCard'; // Importe o novo componente

export default function CardsSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[var(--purple-light)]">
      <div className="mx-auto relative flex flex-col gap-8">

        <FeatureCard title="Choose the tokens" icon={group} alignment="left" >
          <TokenSelectorSkeleton />
          <TokenSelectorSkeleton />
        </FeatureCard>

        <FeatureCard
          title="Get the best yields"
          icon={glass}
          secondaryIcon={stars}
          alignment="right"
        >
          {/* Skeleton para o título da lista */}
          <div className="h-5 w-40 bg-gray-200 rounded-md animate-pulse"></div>
          <YieldPoolSkeleton />
          <YieldPoolSkeleton />
        </FeatureCard>

      </div>
    </section>
  );
}