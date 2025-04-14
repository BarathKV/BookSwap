import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BuyCard from "../Components/BuyCard";

const PostDetails = () => {
  const [showBuyCard, setShowBuyCard] = useState(false);

  const handleBuyClick = () => {
    setShowBuyCard(true);
  };

  const handleCloseBuyCard = () => {
    setShowBuyCard(false);
  };

  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s";

  return (
    <div className="bg-[#eaecff] min-h-screen relative">
      <Navbar />
      <div className="py-4 sm:py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-xl max-h-[500px] sm:max-h-[600px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-none object-cover shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]"
                src={imageUrl}
                alt="Book cover"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="flex flex-col gap-[100px] bg-white rounded-xl p-4 sm:p-8 h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]">
                
                <div className="wrappper">
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 sm:gap-4 items-center">
                    <img
                      src="https://source.unsplash.com/random/30x30/?profile"
                      alt="Profile"
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
                    />
                    {/* Make seller's name a Link */}
                    <Link to="/seller" className="text-sm sm:text-[20px] text-grey-500 hover:underline">
                      Jason Broady
                    </Link>
                  </div>
                  <p className="text-xs sm:text-base text-gray-700">19/1/25</p>
                </div>

                <div className="pt-2 sm:pt-3 text-xl sm:text-2xl lg:text-[30px] font-medium">
                  The Mind of a Leader
                </div>

                <div className="text-sm sm:text-xl text-gray-500">
                  By Kevin Nash
                </div>

                <hr className="mt-2" />

                <div className="pt-3 sm:pt-4 text-xs sm:text-sm md:text-base overflow-y-auto h-[300px] sm:max-h-[250px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore cum vitae unde sequi quia! Libero cupiditate unde officia recusandae excepturi necessitatibus at neque expedita quos saepe autem odit hic tenetur molestiae, aliquid facilis quis modi repudiandae commodi aspernatur qui assumenda accusantium reprehenderit. Natus explicabo voluptatem eligendi reprehenderit, cum omnis nihil doloribus laboriosam neque impedit aperiam qui! Tenetur laboriosam eum ad nemo incidunt, cupiditate nesciunt magni et, porro nam error ipsa assumenda voluptate doloribus. Velit iste quae iure, ipsum distinctio eos laborum placeat assumenda id quam saepe deserunt hic aliquid cumque necessitatibus ducimus illum, ratione architecto. Sequi natus officiis necessitatibus deleniti eum aperiam perspiciatis sapiente? Illum voluptatibus voluptas nulla architecto quas natus dolores sunt labore vel voluptate laudantium minus tenetur ipsum minima facilis ducimus ea inventore porro, odio necessitatibus nobis reprehenderit pariatur voluptatum. Repellat quas alias ratione blanditiis eos culpa a quo magni quasi voluptates commodi nesciunt maxime ipsum amet, impedit iure inventore provident ullam quos adipisci dolorem assumenda dolor! Nam ab, iusto eum tempora qui amet temporibus cum doloremque vero nesciunt veniam nostrum corporis error nisi quos non labore. Magnam, perferendis? Magni, nostrum? Numquam velit eveniet possimus suscipit hic consequatur necessitatibus vel, ad reprehenderit in, a, eius quod itaque doloremque?
                </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12 sm:mt-8">
                  <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white text-sm sm:text-base shadow-md">
                    Rs 899
                  </button>
                  <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white text-sm sm:text-base shadow-md">
                    New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy and Wishlist Buttons */}
      <div className="wrapper py-4 my-4 flex justify-center">
        <div className="flex gap-4 sm:gap-8 w-full max-w-md px-4">
          <button
            onClick={handleBuyClick}
            className="bg-white h-10 w-full rounded-full text-[#000959] text-sm sm:text-base shadow-md transform transition hover:scale-105">
            Buy
          </button>
          <Link
            to="/wishlist"
            className="bg-white h-10 w-full rounded-full text-[#000959] text-sm sm:text-base shadow-md transform transition hover:scale-105 flex justify-center items-center">
            Wishlist it
          </Link>
        </div>
      </div>

      {showBuyCard && <BuyCard onClose={handleCloseBuyCard} />}
    </div>
  );
};

export default PostDetails;
