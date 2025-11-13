import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
