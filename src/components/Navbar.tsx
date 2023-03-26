import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
});

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="w-full py-6">
      <div className="container flex items-center gap-x-2">
        <Link href="/" className="flex-1 md:flex-initial">
          <img
            data-src="/logo.webp"
            alt="logo"
            width={702}
            height={190}
            className="lazyload w-40"
          />
        </Link>
        <div
          className={`${
            menu ? "block" : "hidden md:block"
          } fixed inset-0 z-[9999] overflow-hidden bg-slate-900/25 md:relative md:inset-auto md:bg-transparent md:ml-auto`}
          // onClick={() => setMenu(false)}
        >
          <div className="relative flex h-full w-full max-w-[24rem] flex-col items-end justify-between gap-6 bg-white bg-[url('/assets/quote.svg')] bg-[120%_-50%] bg-no-repeat px-4 py-8 ml-auto md:h-auto md:flex-row md:items-center md:bg-transparent md:p-0 md:ml-0">
            <button
              onClick={() => setMenu(false)}
              className="md:hidden"
              aria-label="زر غلق القائمة الجانبية"
            >
              <AiOutlineClose size={24} />
            </button>
            <nav className="flex w-full min-w-fit flex-col items-center gap-6 text-gray-900 dark:text-gray-300 md:flex-row">
              <Link
                href="#our-services"
                className="hover:text-gray-400 dark:hover:text-gray-100"
                onClick={() => setMenu(false)}
              >
                خدماتنا
              </Link>
              <Link
                href="#about-us"
                className="hover:text-gray-400 dark:hover:text-gray-100"
                onClick={() => setMenu(false)}
              >
                من نحن
              </Link>
              <Link
                href="/contact-us"
                className="hover:text-gray-400 dark:hover:text-gray-100"
                onClick={() => setMenu(false)}
              >
                تواصل معنا
              </Link>
            </nav>
            <button
              className="btn w-full md:min-w-fit"
              onClick={() => setMenu(false)}
            >
              الاستبيان
            </button>
            <div className="social flex w-full items-center justify-evenly text-gray-600 md:hidden">
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
            </div>
          </div>
        </div>
        <button
          onClick={() => setMenu(true)}
          aria-label="زر فتح القائمة الجانبية"
        >
          <AiOutlineMenu size={24} className="md:hidden" />
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
