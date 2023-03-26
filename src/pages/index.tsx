import Head from "next/head";
import { Tajawal } from "next/font/google";
import Navbar from "@/components/Navbar";
import { services } from "@/utils/services";
import { partners } from "@/utils/partners";
import Footer from "@/components/Footer";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>The Corprate&apos;or</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="يضُم قطاع الاعمال مزيجاً واسعاً من مختلف المجالات العملية، يُصنّف بين الخدمي والإنتاجي، ويلتقي في نقطة تقاطع مشتركة تتمثل بفكرة النمو وتقديم الميزة التنافسية، حيث الإعتماد على دراسة وتحليل الخطوات الإستراتيجية المتخذة من قِبل أصحاب القرار لديها، ومن هُنا تنطلق خدماتنا المتبلورة في قطاع التطوير بشتى مفاهيمه."
        />
        {/* <meta name="keywords" content="" /> */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={tajawal.className}>
        <Navbar />
        <section className="relative overflow-y-hidden py-36">
          <div className="absolute inset-0 -z-10">
            <img
              data-src="/flowers.jpg"
              alt="background texture"
              className="lazyload h-full w-full object-cover object-top contrast-50 grayscale-[0.5]"
            />
          </div>
          <div className="container flex h-full flex-col items-center justify-center gap-y-10 text-center text-white">
            <h1 className="text-3xl font-bold lg:text-5xl">
              قيمنا نطمح لتحقيقها
            </h1>
            <span className="sm:w-1/2">
              الإحترافية والذكاء، وضوح المهمات وتطبيقها، استثمار التطوير في
              مجالاته الواسعة، ثم الثقة. قيم نطمح لتحقيقها وتمثيلها بأدائنا
              التفاعلي مع مختلف عملائنا.
            </span>
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="btn sm:w-60">اطلب الان</button>
              <button className="outline-btn">تواصل معنا</button>
            </div>
          </div>
        </section>
        <section className="my-16 text-center">
          <div className="container">
            <h2 className="mb-4 w-full text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              خدماتنا
            </h2>
            <div className="mb-12 w-full text-gray-600 dark:text-gray-300">
              نمتلك خبرة طويلة في مجالنا، ولذلك نستطيع تقديم خدمات متميّزة لك.
            </div>
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <div key={idx} className="flex w-full flex-col">
                  <img
                    data-src={service.img}
                    alt={`رسمة للتعبير عن ${service.title}`}
                    className="lazyload mx-auto mb-6 aspect-square w-48 object-contain"
                  />
                  <h5 className="mb-2 text-2xl font-bold">{service.title}</h5>
                  <span className="tracking-wide text-gray-600 dark:text-gray-300">
                    {service.brief}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative bg-third py-16">
          <div className="tilt">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="container flex flex-col-reverse items-center gap-4 md:flex-row">
            <div className="md:w-1/2">
              <div className="text-3xl font-bold text-main md:text-5xl">
                كلمة رئيس مجلس الإدارة
              </div>
              <p className="my-4 text-justify dark:text-second">
                إن الحاجة الماسة للقطاعات الخاصة والحكومية في مجال التطوير
                بمختلف اشكاله يتيح لنا الأفق في تقديم خدماتنا المتمركزة على
                الحلول العملية والإستراتيجية التي بدورها تنهض بأهداف تلك
                القطاعات، فضلا عن انتقالها لخطوط متوازية مع الرؤى المحلية
                والعالمية المبنية على الأسس الإحترافية. نستثمر طموحنا بالأندماج
                مع التطور التكنولوجي وتطويعه في خدمات التطوير بشكل عام ليواكب
                المجتمع العملي ذلك التحول الرقمي مرادفاً نموه العالمي. التميز في
                قطاع الأعمال، والأبتكار في تلبية حاجات المجتمع الاقتصادي
                والعملي، عبر اكتساب القيم والخبرات المتمثلة في تحدي الواقع
                التنافسي والعمل الدؤوب ثم الثقة بالذات الإبداعية في مُناخ
                اقتصادي خصب، امر يُحفز الإنخراط في ثنايا منظومة الأعمال مما
                يتناسق مع الرسم البياني للتطوير المحلي وإرتفاعه.
              </p>
              <div className="text-main">أ.رياض عسيري - الرئيس التنفيذي</div>
            </div>
            <img
              data-src="/chairman.webp"
              alt="رئيس مجلس الإدارة"
              className="lazyload aspect-square object-contain md:w-1/2"
            />
          </div>
          <div className="tilt">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        <section className="my-16 text-center">
          <div className="container">
            <h2 className="mb-4 w-full text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              شركاء النجاح
            </h2>
            <div className="mb-12 w-full text-gray-600 dark:text-gray-300">
              نفخر بشركاء التطور والنمو
            </div>
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex w-full flex-col">
                  <img
                    data-src={partner.img}
                    alt={`شعار ${partner.title}`}
                    className="lazyload mx-auto mb-6 aspect-square w-48 object-contain"
                  />
                  <h5 className="mb-2 text-2xl font-bold">{partner.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-main py-16 text-justify text-white">
          <div className="container">
            <div className="text-4xl font-bold">
              نحن نقدم حلولاً لتنمية أعمالك
            </div>
            <p className="my-6 md:w-2/3">
              إن الخبرات العملية والتنفيذية الشمولية بمختلف القطاعات لشركة
              <span> The Corprate&apos;or </span>
              يؤهلها لتقديم الخدمات التطويرية بما يتناسق مع طبيعة الأنشطة
              المؤسسية من حيث توزيع ورسم المهام لكل إدارة داخلية، ولابد من توضيح
              مفهوم التطوير الشمولي لقطاع الأعمال بشكليه الخاص والحكومي، حيث أن
              خدمات التطوير لها دور في إضافة بصمة فعّالة وإيجابية متناسقة وطبيعة
              النشاط العملي والتشغيلي {`:)`}
            </p>
            <button className="outline-btn px-8">المزيد</button>
          </div>
        </section>
        <section className="py-16">
          <div className="container flex flex-col justify-evenly gap-y-4 md:flex-row">
            <div className="w-full md:w-2/6">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  data-src="/assets/deal.webp"
                  alt="shaking hands"
                  className="lazyload aspect-video object-fill "
                />
                <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-slate-900/70 text-2xl text-white md:text-5xl">
                  عملائنا
                </span>
              </div>
              <ul className="list-disc px-4">
                <li>بستان المتظل وبئر عذق بالمدينة المنورة</li>
                <li>مدينيات مشاعل</li>
                <li>شركة البينة للمحاماة</li>
                <li>مزرعة الفهدية</li>
                <li>مشاريع الإسكان بمنطقة القصيم</li>
                <li>مشاريع الإسكان بمحافظة الدوادمي</li>
              </ul>
            </div>
            <div className="w-full md:w-2/6">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  data-src="/assets/model.webp"
                  alt="model paper"
                  className="lazyload aspect-video object-fill "
                />
                <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-slate-900/70 text-2xl text-white md:text-5xl">
                  مشاريعنا
                </span>
              </div>
              <ul className="list-disc px-4">
                <li>SPOOKY HOLLER</li>
                <li>ROOF GARDEN</li>
                <li>نادي الأعمال</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-third py-16">
          <div className="container">
            <div className="flex gap-y-6 flex-col sm:flex-row text-center sm:text-start items-center lg:w-2/3 lg:mx-auto">
              <div className="flex-grow text-2xl dark:text-second font-medium">
                هل أنت مستعد لنقل نمو عملك إلى المستوى التالي؟
              </div>
              <button className="btn px-8 w-full min-w-fit sm:w-auto">اطلب الان</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
