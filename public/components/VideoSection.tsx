"use client";
import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ویدیو سمت چپ */}
        <div className="w-full md:w-2/3 md:h-96 shadow-lg rounded-2xl overflow-hidden">
          <div className="w-full h-full">
            <video
              src="/images/IMG_7050.MOV"
              controls
              className="w-full h-full rounded-xl"
            ></video>
          </div>
        </div>

        {/* متن سمت راست */}
        <div className="w-full md:w-1/3 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            تست مقاومت محصول
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            با مشاهده این ویدیو، کیفیت و استحکام واقعی محصولات روف پلاست را از
            نزدیک ببینید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
