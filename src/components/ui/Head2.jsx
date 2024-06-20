const Head2 = (props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-white lg:to-[#e9e7ec] to-[#5A12F6] px-2 py-1 w-[180px] text-center">
          {props.section}
        </p>
        <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl text-center font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
          <p>{props.sectionName}</p>
          <p>{props.sectionName1}</p>
        </div>
      </div>
    </>
  );
};

export default Head2;
