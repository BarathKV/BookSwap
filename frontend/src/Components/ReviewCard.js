import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-center w-screen ">
      <div className="h-24 p-2 bg-[#eaecff] rounded-xl w-[800px] text-xl flex gap-7  flex-col">

        <div className="flex flex-row h-1  ">
          <div className="flex justify-center ">
            <img
              src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
              alt="Profile"
              className="mr-2 h-6 w-6 rounded-full border-white shadow-md"
            />
          </div>

          {/* Name */}
          <h1 className=" text-[11px] italic mb-4 text-gray-800">
            JASON BROADY
          </h1>
        </div>
        <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center items-center bg-[#000959] text-white h-8 w-16 px-3 py-1 rounded-[12px] text-[15px] font-semibold">
              4.5
            </div>     
              <div className="flex items-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magni?{" "}
              </div>
        
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;
