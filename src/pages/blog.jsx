import BlogDetailsCom from "@/components/BlogDetailsCom";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const blog = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <BlogDetailsCom />
      </div>
    </>
  );
};
export default blog;
