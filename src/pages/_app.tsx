import Layout from '@design/Layout';
import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <script
          src="//sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438"
          type="text/javascript"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
