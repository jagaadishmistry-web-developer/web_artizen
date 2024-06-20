import { BlogData } from "@/utils/BlogData";
import BlogCard from "./BlogCard";
import Head2 from "./Head2";

const BlogUi = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <Head2 section="Our Blog" sectionName="Latest News's And Posts" />
        <div className="xl:pt-[80px] pt-[60px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {BlogData.map((blogCardData) => {
              return <BlogCard key={blogCardData.id} {...blogCardData} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogUi;
