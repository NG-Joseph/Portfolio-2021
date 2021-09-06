import  Head  from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Joseph Nwokotubo's Portfolio</title>
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
</Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 