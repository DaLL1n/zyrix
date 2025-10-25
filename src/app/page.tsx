import { HeroHome } from '@/widgets/HeroHome';
import './page.scss';
import { KeyMetrics } from '@/widgets/KeyMetrics';
import { FeaturesOverview } from '@/widgets/FeaturesOverview';

export default function Home() {
  return (
    <>
      <HeroHome />
      <KeyMetrics />
      <FeaturesOverview />
    </>
  );
}
