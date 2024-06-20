import FooterBar from "./FooterBar";
// import NavBar from "./NavBar";
// import TopBar from "./TopBar";

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
