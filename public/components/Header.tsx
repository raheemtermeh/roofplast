"use client";
import React, { useState } from "react";
import Image from "next/image";
import bannerImg from "@/public/images/photo_2025-04-26_21-48-08.jpg";
import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert(result.message || "خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("خطایی در ارسال پیام رخ داده است.");
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white">
      {/* هدر بالا */}

      <div className="flex justify-end px-1 md:px-20 py-6  ">
       
        <div className="flex gap-6  text-gray-700 text-center text-xs md:text-base md:font-bold">
          <div className="text-green-800 text-3xl  rounded-md p-0.5 cursor-pointer md:mr-[666px]">
            <IoSearchCircleOutline />
          </div>
          <Link href="#" className="hover:text-green-600 mt-1.5 md:mt-0.5">
            درباره ما
          </Link>
          <Link
            onClick={toggleModal}
            href="#"
            className="hover:text-green-600 mt-1.5 md:mt-0.5"
          >
            تماس با ما
          </Link>
          <Link href="#" className="mt-1.5 hover:text-green-600 md:mt-0.5">
            وبلاگ
          </Link>
          <Link
            href="#"
            className="text-green-600 mt-1.5 hover:text-green-600 md:mt-0.5"
          >
            صفحه اصلی
          </Link>
        </div>
        <div className="text-green-800 font-bold items-center text-xl text-center mx-2.5 ">
          روف پلاست
        </div>
      </div>
      <div className="w-[80%] mx-auto border-t border-gray-300 mb-8"></div>

      {/* محتوای اصلی */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
        {/* تصویر سمت چپ */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="rounded-[30px] mt-3 w-[370px] h-[350px] md:w-[500px] md:h-[450px] relative">
            <Image
              src={bannerImg}
              alt="روف پلاست"
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
        </div>

        {/* متن سمت راست */}
        <div className="w-full md:w-1/2 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
            خرید راحت زهکش گیاه، با{" "}
            <span className="text-green-600">روف پلاست</span>!
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            زیبا، مقاوم، ماندگار
            <br />
            تولیدکننده تخصصی زهکش روف گاردن و چوب پلاست
            <br />
            با بیش از 10 سال تجربه در تولید محصولات نوین ساختمانی، ما در مسیر
            ارتقای زیبایی و کیفیت فضاهای بیرونی و سبز قدم برداشته‌ایم. کیفیت
            بالا، طراحی هوشمندانه و دوام طولانی، سه اصل اساسی در تولید محصولات
            ما هستند.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition-all duration-300">
            مشاهده محصولات
          </button>
          <button className="text-green-700 border-dashed border hover:bg-green-700 hover:text-white px-6 mx-3 py-2 rounded-xl transition-all duration-300">
            &lt;- مشاهده محصولات
          </button>
        </div>
      </div>
      {/* مدال */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1212125b] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[90%] md:w-[40%] shadow-2xl relative">
            {/* دکمه بستن */}
            <button
              onClick={toggleModal}
              className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {/* عنوان مدال */}
            <h2 className="text-2xl font-extrabold text-green-800 mb-6 text-right">
              فرم تماس با ما
            </h2>

            {/* فرم */}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  نام
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2 text-right"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  شماره همراه
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2 text-right"
                  placeholder="شماره همراه خود را وارد کنید"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  پیام
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 px-4 py-2 text-right"
                  rows={4}
                  placeholder="پیام خود را وارد کنید"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md transition-all"
                >
                  بستن
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
