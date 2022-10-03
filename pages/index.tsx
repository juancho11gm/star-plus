import { NextPage } from 'next';
import Head from 'next/head';
import { UIContextProvider } from '@context/UIContext';
import Accordion from '@components/AccordionList';
import Devices from '@components/Devices';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Plans from '@components/Plans';
import AccordionList from '@components/AccordionList';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Star +</title>
        <meta name="description" content="Star + website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UIContextProvider>
        <Header />
        <Hero />
        <Plans />
        <Devices />
        <AccordionList />
        <Footer />
      </UIContextProvider>
    </>
  );
};

export default HomePage;
