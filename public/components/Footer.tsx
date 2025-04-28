import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 text-right px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* لوگو و توضیح */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-2"
        >
          <h3 className="text-2xl font-bold mb-4">روف پلاست</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            با بیش از 10 سال تجربه در تولید محصولات نوین ساختمانی، ما در مسیر ارتقای زیبایی و کیفیت فضاهای بیرونی و سبز قدم برداشته‌ایم.
          </p>
          <div className="flex items-center mt-4 gap-2">
            <FaPhoneAlt />
            <span className="text-sm">09124049247</span>
          </div>
        </motion.div>

        {/* لینک‌های مفید */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm"
        >
          <h4 className="font-semibold mb-4">دسترسی سریع</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">صفحه اصلی</Link></li>
            <li><Link href="#" className="hover:underline">درباره ما</Link></li>
            <li><Link href="#" className="hover:underline">محصولات</Link></li>
            <li><Link href="#" className="hover:underline">تماس با ما</Link></li>
          </ul>
        </motion.div>

        {/* مزایا */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h4 className="font-semibold mb-4">مزایای خرید از ما</h4>
          <ul className="text-sm space-y-2">
            <li>تحویل درب منزل</li>
            <li>ضمانت محصول</li>
            <li>پرداخت درب منزل</li>
            <li>مشاوره تخصصی رایگان</li>
          </ul>
        </motion.div>
      </div>

      {/* نوار پایین */}
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} روف پلاست - تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
