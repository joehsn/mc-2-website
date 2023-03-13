import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

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
      <div>
        <nav className="w-full py-8 text-center">NAVBAR</nav>
        <div className="mx-auto w-[550px]">
          <SurveyComponent />
        </div>
      </div>
    </>
  );
}

export default Survey;
