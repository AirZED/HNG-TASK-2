import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className={props.className}>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
