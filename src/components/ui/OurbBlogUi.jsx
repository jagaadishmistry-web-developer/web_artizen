import { BlogData } from "@/utils/BlogData";
import Link from "next/link";
import BlogCard from "./BlogCard";
import Head2 from "./Head2";

const OurbBlogUi = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:pt-[100px] 2xl:pb-[130px] xl:pb-[110px] py-[70px]">
        <Head2 section="Our Blog" sectionName="Latest News's And Posts" />
        <div className="xl:pt-[70px] pt-[50px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-10 gap-5">
            {BlogData.slice(0, 3).map((blogCardData) => {
              return (
                <Link href={"/blog"} key={blogCardData.id}>
                  <BlogCard {...blogCardData} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurbBlogUi;
