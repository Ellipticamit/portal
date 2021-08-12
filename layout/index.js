import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header />
      <div className='page-content bg-white' id='top'>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
