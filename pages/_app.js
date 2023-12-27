import '@/styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Additional options here, refer to the AOS documentation
    });
  }, []);

  return <Component {...pageProps} />;
}
