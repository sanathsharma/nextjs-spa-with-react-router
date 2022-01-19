import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const { isReady } = useRouter();

  return (
    <div className="h-screen w-screen overflow-auto" suppressHydrationWarning>
      {typeof window === 'undefined' || !isReady ? <div>loading...</div> : <Component {...pageProps} />}
    </div>
  );
};

export default App;
