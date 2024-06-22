import FooterBar from "./FooterBar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        {children}
        <FooterBar />
      </div>
    </>
  );
};
export default Layout;
