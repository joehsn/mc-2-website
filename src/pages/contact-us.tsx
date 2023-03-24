import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
});

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>تواصل معنا</title>
      </Head>
      <main className={tajawal.className}>
        <Navbar />
        <section className="body-font relative text-gray-600">
          <div className="container mx-auto flex flex-wrap px-5 py-8 sm:flex-nowrap">
            <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 py-10 px-8 sm:mr-10 md:w-1/2 md:px-16 lg:w-2/3">
              <iframe
                width="100%"
                height="100%"
                className="lazyload absolute inset-0 opacity-40 contrast-125 grayscale"
                data-src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAN4FpvoTeToxAafc_OGlufckos2clD7_k&q=24.8930278,46.60425&zoom=14"
              ></iframe>
              <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
                <div className="px-6 lg:w-1/2">
                  <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                    العنوان
                  </h2>
                  <p className="mt-1">شارع القوات الخاصة، الرياض، السعودية</p>
                </div>
                <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                  <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                    البريد إلكتروني
                  </h2>
                  <a
                    className="leading-relaxed text-main"
                    href="mailto:info@the-corporator.com"
                  >
                    info@the-corporator.com
                  </a>
                  <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                    هاتف
                  </h2>
                  <a
                    className="leading-relaxed text-main"
                    href="tel:0114551513"
                  >
                    0114551513
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col bg-white md:mt-0 md:w-1/2 md:py-8 md:ml-auto lg:w-1/3">
              <h2 className="title-font mb-6 text-3xl font-bold text-gray-900">
                تواصل معنا
              </h2>
              <form>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm leading-7 text-gray-600"
                  >
                    الاسم كامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-transparent transition-colors duration-200 ease-in-out focus:border-main focus:ring-2 focus:ring-rose-700"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm leading-7 text-gray-600"
                  >
                    البريد الالكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-transparent transition-colors duration-200 ease-in-out focus:border-main focus:ring-2 focus:ring-rose-700"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="tel"
                    className="mb-1 block text-sm leading-7 text-gray-600"
                  >
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-transparent transition-colors duration-200 ease-in-out focus:border-main focus:ring-2 focus:ring-rose-700"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm leading-7 text-gray-600"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-transparent transition-colors duration-200 ease-in-out focus:border-main focus:ring-2 focus:ring-rose-700"
                  ></textarea>
                </div>
                <button type="submit" className="btn px-8">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
