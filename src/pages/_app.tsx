import { ThemeProvider } from 'styled-components';
import light from 'styles/theme/light';
import GlobalStyles from 'styles/global';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
  
    <ThemeProvider theme={light}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>

  );
}

export default MyApp
