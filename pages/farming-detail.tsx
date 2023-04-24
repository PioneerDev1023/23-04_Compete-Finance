import FarmingDetail from '@/components/FarmingDetail';
import Layout from '@/components/layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    <main className={inter.className}>
      <Layout>
        <FarmingDetail />
      </Layout>
    </main>
  );
}
