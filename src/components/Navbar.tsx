import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="w-full py-6">
      <div className="container flex items-center gap-x-4">
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
          } absolute inset-0 bg-slate-900/25 md:relative md:inset-auto md:bg-transparent z-[9999] md:ml-auto`}
          // onClick={() => setMenu(false)}
        >
          <div className="flex h-full max-w-[24rem] w-full flex-col items-end justify-between gap-6 bg-white px-4 py-8 ml-auto md:h-auto md:flex-row md:items-center md:bg-transparent md:p-0 md:ml-0 relative">
            <button onClick={() => setMenu(false)} className="md:hidden">
              <AiOutlineClose size={24} />
            </button>
            <nav className="flex w-full min-w-fit flex-col items-center gap-6 text-gray-900 md:flex-row">
              <Link href="#our-services" className="hover:text-gray-400">
                خدماتنا
              </Link>
              <Link href="#about-us" className="hover:text-gray-400">
                من نحن
              </Link>
              <Link href="/contact-us" className="hover:text-gray-400">
                تواصل معنا
              </Link>
            </nav>
            <button className="btn w-full md:min-w-fit">الاستبيان</button>
            <div className="social flex w-full items-center justify-evenly md:hidden text-gray-600">
              <a href="#facebook">
                <AiFillFacebook size={24} />
              </a>
              <a href="#instagram">
                <AiFillInstagram size={24} />
              </a>
              <a href="#youtube">
                <AiFillYoutube size={24} />
              </a>
              <a href="#linkedin">
                <AiFillLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <button onClick={() => setMenu(true)}>
          <AiOutlineMenu size={24} className="md:hidden" />
        </button>
      </div>
    </header>
  );
}
