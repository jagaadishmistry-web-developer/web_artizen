import { SortTeamData2 } from "@/utils/OurTeamData";
import Link from "next/link";
import Head2 from "./Head2";
import TeamCard from "./TeamCard";

const OurSortTeam = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <Head2
          section="Our Team"
          sectionName1="With Smart Solutions"
          sectionName="Our Certified Scientists"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[70px] xl:gap-8 gap-6">
          {SortTeamData2.slice(0, 3).map((teamCardData) => {
            return (
              <Link href={"/team"} key={teamCardData.id}>
                <TeamCard {...teamCardData} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default OurSortTeam;
