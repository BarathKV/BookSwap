import React from "react";

const ReviewCard = ({ review }) => {
  console.log(review.stars);
  switch (review.stars) {
    case "ONE":
      review.num_stars = 1;
      break;
    case "TWO":
      review.num_stars = 2;
      break;
    case "THREE":
      review.num_stars = 3;
      break;
    case "FOUR":
      review.num_stars = 4;
      break;
    case "FIVE":
      review.num_stars = 5;
      break;
    default:
      review.num_stars = "No";
  }
  return (
    <div className="flex justify-center w-screen ">
      <div className="h-24 p-2 bg-[#eaecff] rounded-xl w-[800px] text-xl flex gap-7  flex-col">
        <div className="flex flex-row h-1  ">
          <div className="flex justify-center m-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWi6fx13t3nmhNDxOwxj80l8QTzZrnf2_lA&s"
              alt="Profile"
              className="mr-2 h-8 w-8 rounded-full border-white shadow-md"
            />
          </div>

          {/* Name */}
          <h1 className=" text-[14px] italic mt-2 mb-4 text-gray-800">
            {review.user.username}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center bg-[#000959] text-white h-8 w-20 px-3 py-1 rounded-[12px] text-[15px] font-semibold">
            <p className="text-yellow-400">{review.num_stars}</p> <span className="text-[16px]">⭐</span>
          </div>
          <div className="flex items-center">{review.reviewText} </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
