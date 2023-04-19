import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="layout_main bg-mainbg bg-no-repeat bg-cover">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
