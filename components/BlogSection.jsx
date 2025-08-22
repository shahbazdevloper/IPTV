"use client";



export function BlogSectin() {


  return (
    <div className="flex flex-wrap p-4 justify-center w-full py-8 ">
        {/* Heading Section */}
            <div className="relative flex flex-col items-center text-center w-full px-4 mb-20">
                <h1 className="Features_label border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
                    Blogs
                </h1>
                <h2 className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                    More from out latest blogs
                </h2>
            </div>
   <div className="flex justify-center items-center p-4  w-full">
      <iframe
        name="myiFrame"
        width="1400px"
        height="600px"
        src="https://blog.expressiptv.com/blog-for-js-website/"
        scrolling="no"
        marginWidth="0"
        marginHeight="0"
        style={{ border: "0px none #ffffff" }}
        className="max-w-full rounded-lg shadow-lg"
        title="IPTV Blog"
      ></iframe>
    </div>
    </div>
  );
}
