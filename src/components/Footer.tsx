import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container flex flex-col items-center gap-4 md:flex-row">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="logo"
            width={702}
            height={190}
            className="w-40"
          />
        </Link>
        <p className="flex-1 text-center text-sm text-gray-500 md:text-start">
          © {new Date().getFullYear().toString()} - حقوق الطبع والنشر محفوظة لدي
          The Corprate&apos;or
        </p>
        <span className=" flex gap-x-4">
          <a
            href="#facebook"
            className="social-icon"
            aria-label="رابط حساب The corporate'or علي منصة facebook"
          >
            <AiFillFacebook size={24} />
          </a>
          <a
            href="#instagram"
            className="social-icon"
            aria-label="رابط حساب The corporate'or علي منصة instagram"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="#youtube"
            className="social-icon"
            aria-label="رابط حساب The corporate'or علي منصة youtube"
          >
            <AiFillYoutube size={24} />
          </a>
          <a
            href="#linkedin"
            className="social-icon"
            aria-label="رابط حساب The corporate'or علي منصة linkedin"
          >
            <AiFillLinkedin size={24} />
          </a>
        </span>
      </div>
    </footer>
  );
}
