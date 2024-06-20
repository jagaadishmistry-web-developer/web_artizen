import BlogCom from "@/components/BlogCom";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const blogs = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <BlogCom />
      </div>
    </>
  );
};

export default blogs;
