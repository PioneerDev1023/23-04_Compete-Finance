import Exchange from '@/components/Exchange';
import Layout from '@/components/layout';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {

  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Exchange />
      </Layout>
    </main>
  );
}
