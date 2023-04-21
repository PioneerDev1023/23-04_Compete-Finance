import Position from '@/components/Position';
import Layout from '@/components/layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    <main className={inter.className}>
      <Layout>
        <Position />
      </Layout>
    </main>
  );
}
