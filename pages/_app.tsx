import type { AppProps } from 'next/app';
import { UIContextProvider } from '@context/UIContext';
import { UserContextProvider } from '@context/UserContext';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </UIContextProvider>
  );
}

export default MyApp;
