"use client";

export function IPTVArticles() {
  return (
    <div className="flex justify-center items-center p-4 lg:py-32 w-full">
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
  );
}
