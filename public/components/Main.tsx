import React from "react";
import Image from "next/image";
import panelImg from "@/public/images/3-removebg-preview.png";
import tile2 from "@/public/images/tile-2.png";
import tele1 from "@/public/images/photo_2025-04-27_20-42-18-removebg-preview.png";
import { FaTruck, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

import { StaticImageData } from "next/image";

interface ProductBoxProps {
  title: string;
  specs: string[];
  img: string | StaticImageData;
  
}

const ProductBox: React.FC<ProductBoxProps> = ({ title, specs, img }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md p-1 shadow-xl overflow-hidden"
  >
    <div className="bg-green-800 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden transition duration-300 group-hover:scale-[1.01] group-hover:shadow-2xl">
      {/* افکت گرادینت پشت تصویر */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br  from-green-700/50 to-black/20 opacity-10 rounded-[2rem]" />
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 z-10 relative">
        {/* بکگراند گلس */}
        <div className="absolute w-[250px] h-[250px] md:w-[250px] md:h-[250px] bg-white/20 backdrop-blur-md rounded-xl z-0" />
        <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] z-10">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-right z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <ul className="mb-6 space-y-2">
          {specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          
          <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-green-800 transition">
            تماس برای مشاوره و سفارش
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Main = () => {
  return (
    <div className="py-16 px-4 md:px-20  bg-gray-50">
      {/* ویژگی‌ها */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center ">
        <div>
          <FaMoneyBillWave className="text-green-600 mx-auto mb-4" size={50} />
          <h3 className="text-lg font-semibold mb-2">پرداخت درب منزل</h3>
          <p className="text-sm text-gray-600">
            برای ایجاد اطمینان خاطر مشتریان، علاوه بر پرداخت آنلاین امکان پرداخت
            درب منزل نیز وجود دارد
          </p>
        </div>
        <div>
          <FaShieldAlt className="text-green-600 mx-auto mb-4" size={50} />
          <h3 className="text-lg font-semibold mb-2">ضمانت محصول</h3>
          <p className="text-sm text-gray-600">
            به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل می‌توانید مرجوع
            کنید
          </p>
        </div>
        <div>
          <FaTruck className="text-green-600 mx-auto mb-4" size={50} />
          <h3 className="text-lg font-semibold mb-2">تحویل درب منزل</h3>
          <p className="text-sm text-gray-600">
            با ثبت سفارش و ارسال آدرس، محصول در سریع‌ترین زمان ممکن درب منزل یا
            محل پروژه تحویل داده می‌شود.
          </p>
        </div>
      </div>

      {/* محصولات */}
      <ProductBox
        title="پنل زهکش بام سبز"
        img={tele1}
        specs={["وزن : 600 گرم","ابعاد هر شیت: ۵۰*۵۰", "ضخامت: ۳۰ میلیمتر", "قیمت :49300"]}
      />
      <ProductBox
        title="تایل زیرسازی چمن و چوب"
        img={tile2}
        specs={["وزن : 150 گرم", "ابعاد هر شیت: 3۰*3۰", "ضخامت:17 میلی متر", " قیمت: 15600"]}
      />
      <ProductBox
        title="زیرلایه فیلتر مخصوص بام سبز"
        img={panelImg}
        specs={["وزن : 270 گرم","ابعاد هر شیت: 3۰*3۰", "ضخامت: 17 میلیمتر", " قیمت: 29700"]}
      />
    </div>
  );
};

export default Main;
