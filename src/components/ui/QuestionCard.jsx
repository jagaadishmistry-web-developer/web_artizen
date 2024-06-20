import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Question = ({ question, ans }) => {
  const [seen, setSeen] = useState(false);

  return (
    <>
      <div className="pt-5">
        <div className="bg-white xl:py-5 lg:py-4 md:py-6 py-5 flex items-center justify-between px-4">
          <div className="2xl:text-[28px] xl:text-[26px] lg:text-[20px] md:text-[26px] text-[16px] font-medium">
            {" "}
            {question}
          </div>
          <div
            onClick={() => setSeen(!seen)}
            className="cursor-pointer hover:scale-105 duration-200">
            {seen ? (
              <FaMinusCircle className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-[#5A12F6]" />
            ) : (
              <FaPlusCircle className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-[#5A12F6]" />
            )}
          </div>
        </div>
        {seen && (
          <div
            onClick={() => setSeen(false)}
            className="text-white bg-black py-6 px-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
            {ans}
          </div>
        )}
      </div>
    </>
  );
};
export default Question;
