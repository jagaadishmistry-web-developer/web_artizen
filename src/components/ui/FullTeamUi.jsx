import { SortTeamData2 } from "@/utils/OurTeamData";
import Head2 from "./Head2";
import TeamCard from "./TeamCard";

const FullTeamUi = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <Head2
          section="Our Team"
          sectionName1="With Smart Solutions"
          sectionName="Our Certified Scientists"
        />
        {/* Card  */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[70px] xl:gap-8 gap-6">
          {SortTeamData2.map((teamCardData) => {
            return <TeamCard key={teamCardData.id} {...teamCardData} />;
          })}
        </div>
      </div>
    </>
  );
};
export default FullTeamUi;
