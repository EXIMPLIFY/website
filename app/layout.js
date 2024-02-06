import 'swiper/css';
import 'swiper/css/pagination';
import '../src/styles/main.scss';
import Footer from '../src/commons/footer';
import Header from '../src/commons/header';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
