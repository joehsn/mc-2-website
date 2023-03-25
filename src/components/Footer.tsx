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
      <div className="container flex flex-col items-center md:flex-row gap-4">
        <Link
          href="/"
        >
          <img
            data-src="/logo.webp"
            alt="logo"
            width={702}
            height={190}
            className="lazyload w-40"
          />
        </Link>
        <p className="flex-1 text-sm text-center md:text-start text-gray-500">
          © {new Date().getFullYear().toString()} - حقوق الطبع والنشر محفوظة لدي
          The Corprate&apos;or
        </p>
        <span className=" flex gap-x-4">
          <a href="#facebook" className="social-icon">
            <AiFillFacebook size={24} />
          </a>
          <a href="#instagram" className="social-icon">
            <AiFillInstagram size={24} />
          </a>
          <a href="#youtube" className="social-icon">
            <AiFillYoutube size={24} />
          </a>
          <a href="#linkedin" className="social-icon">
            <AiFillLinkedin size={24} />
          </a>
        </span>
      </div>
    </footer>
  );
}