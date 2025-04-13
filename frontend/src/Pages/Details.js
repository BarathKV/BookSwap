import React from "react";
import Navbar from '../Components/Navbar';

const Details = () => {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s';

    return (
        <div className="bg-[#eaecff] min-h-screen">
            <Navbar />
            <div className="py-4 sm:py-8 px-4 sm:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Image Section - Made more responsive */}
                        <div className="lg:w-1/2 flex justify-center">
                            <img
                                className="rounded-xl max-h-[500px] sm:max-h-[600px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-none object-cover shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]"
                                src={imageUrl}
                                alt="Book cover"
                            />
                        </div>

                        {/* Content Section - Improved mobile layout */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl p-4 sm:p-8 h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 sm:gap-4 items-center">
                                        <img 
                                            src="https://source.unsplash.com/random/30x30/?profile" 
                                            alt="Profile" 
                                            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" 
                                        />
                                        <h2 className="text-sm sm:text-[20px]">Iam Steve</h2>
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

                                <div className="pt-3 sm:pt-4 text-xs sm:text-sm md:text-base overflow-y-auto max-h-[150px] sm:max-h-[250px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nam dicta corrupti neque quisquam, aspernatur nesciunt accusantium sed, magni amet excepturi voluptatum hic cum fuga nulla sapiente laboriosam incidunt consectetur? Quis assumenda corrupti magni minus vitae esse dolorem rem. Est nisi soluta nobis velit totam deserunt nihil consectetur facere adipisci voluptatibus, earum alias nesciunt aut debitis placeat incidunt maxime voluptate minus corporis laborum expedita nam. Dolores culpa eum, blanditiis eius, consequuntur natus expedita cupiditate dolore fuga assumenda iusto quibusdam voluptatem libero sapiente officia, commodi neque doloribus. Totam, sed ratione doloribus impedit tempore maxime? Minima voluptas, cumque temporibus minus eligendi voluptatibus.
                                </div>

                                {/* Buttons - Stacked on mobile */}
                                <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
                                    <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white text-sm sm:text-base shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]">
                                        Rs 899
                                    </button>
                                    <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white text-sm sm:text-base shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)]">
                                        New
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom buttons - Only show on mobile */}
            <div className=" wrapper py-4 my-4 flex justify-center">
                <div className="flex gap-4 sm:gap-8 w-full max-w-md px-4">
                    <button className="bg-white h-10 w-full rounded-full text-[#000959] text-sm sm:text-base shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105">
                        Buy
                    </button>
                    <button className="bg-white h-10 w-full rounded-full text-[#000959] text-sm sm:text-base shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;