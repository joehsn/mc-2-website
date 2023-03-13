import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

import { Tajawal } from "next/font/google";
import Link from "next/link";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
});

const SurveyComponent = dynamic(() => import("@/components/survey"), {
  ssr: false,
});

interface Props {}

function Survey({}: Props) {
  return (
    <>
      <Head>
        <title>اسنبيان</title>
      </Head>
      <main className={tajawal.className}>
        <nav className="w-full py-8 text-center">
          <Link href="/">الصفحة الرئيسية</Link>
        </nav>
        <div className="w-full bg-third py-32">
          <div className="mx-auto w-[768px]">
            <SurveyComponent />
          </div>
        </div>
      </main>
    </>
  );
}

export default Survey;
