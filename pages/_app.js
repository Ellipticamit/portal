import 'assets/css/global.css';
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from 'layout';
import useScrollPosition from 'use-scroll-position';

function MyApp({Component, pageProps}) {
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody] = useState();
  const [header, setHeader] = useState('fixed');
  const [header_, setHeader_] = useState();

  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setbody(document.querySelector('body'));
    setHeader_(document.getElementsByClassName('main-bar-wraper'));
  }, []);

  header === 'fixed' && scrollPosition > 10
    ? header_ && header_[0].classList.add('is-fixed')
    : header_ && header_[0].classList.remove('is-fixed');

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='page-wraper'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
export default MyApp;
