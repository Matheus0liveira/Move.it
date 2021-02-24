import { ThemeProvider } from 'styled-components';
import light from 'styles/theme/light';
import GlobalStyles from 'styles/global';
import Head from 'next/head';
import ChallengeProvider, { ChallengeContext } from 'contexts/ChallengesContext';
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>

      <ThemeProvider theme={light}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>

    </ChallengeProvider>
  );
}

export default MyApp
