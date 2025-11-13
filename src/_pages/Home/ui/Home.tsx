import { HeroHome } from '@/widgets/HeroHome';
import './Home.scss';
import { KeyMetrics } from '@/widgets/KeyMetrics';
import { FeaturesOverview } from '@/widgets/FeaturesOverview';
import { MarketTrend } from '@/widgets/MarketTrend';

const Home = () => {
  return (
    <>
      <HeroHome />
      <KeyMetrics />
      <FeaturesOverview />
      <MarketTrend />
    </>
  );
};

export default Home;
