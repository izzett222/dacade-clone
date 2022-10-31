/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const handleScroll = () => {
    document
      .getElementById("second-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>NEAR dev 101</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://dacade-nearbalkans.netlify.app/fav-icons/favicon-32x32.png"
        ></link>
      </Head>
      <header className="  py-6 bg-white fixed top-0 left-0 right-0   z-20">
        <div className="flex w-[90%] lg:w-[80%] max-w-7xl  mx-auto justify-between items-center">
          <div className="flex items-center">
            <Link href="/dacade" className="inline-flex items-center">
              <img
                src="/icons/logo-sm.svg"
                className="w-[30px] lg:w-[39px]  inline"
                alt="dacade logo"
              />{" "}
              <span className="hidden md:inline text-txt-bg text-lg ml-2 font-semibold font-segoe">
                Dacade
              </span>
            </Link>
            <span className="w-0.5 h-[30px] mx-1.5 bg-gray-200"></span>
            <Link href="/near-balkan">
              <img
                src="/icons/second-logo-sm.svg"
                className="lg:hidden"
                alt="Near balkans logo"
              />
              <img
                src="/icons/second-logo.svg"
                className="hidden lg:block"
                alt="Near balkans logo"
              />
            </Link>
          </div>
          <div className="flex">
            <button
              type="button"
              className="hidden text-lg text-txt-color lg:block mr-12"
            >
              Start The Course
            </button>
            <Link
              href="/wallet"
              className="py-3 px-5 bg-zinc-700 text-white text-lg rounded-full tracking-wide"
            >
              Create wallet
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="relative h-screen isolate">
          <div className="h-[600px] pt-48 relative">
            <div className="w-[50%] h-full bg-hero-bg absolute -top-[300px] lg:-top-[450px] opacity-40"></div>
            <div className="w-[50%] h-full bg-hero-bg absolute -top-[300px] lg:-top-[450px] opacity-40 right-0"></div>
            <div className="pt-12 lg:pt-24 px-6 relative z-10  pb-24 max-w-[910px] mx-auto">
              <h1 className=" max-w-[180px] lg:max-w-none lg:text-center mx-auto text-txt-color text-4xl lg:text-7xl font-semibold leading-[52px]">
                Get{" "}
                <span className=" bg-hero-text bg-clip-text text-transparent">
                  NEAR
                </span>{" "}
                Certified!
              </h1>
              <p className="text-center text-lg text-hero-txt pt-5 lg:text-[22px]">
                We, in NEAR Balkans, know how important it is to have regional
                and local support. Now you can become NEAR certified in a
                regional language of preference and connect with our team to
                support your further growth within the NEAR ecosystem.
              </p>
            </div>
            <div className="text-center">
              <button onClick={handleScroll}>
                <img
                  src="/icons/down-arrow.svg"
                  className="text-center inline"
                  alt="down arrow"
                />
              </button>
            </div>
          </div>
        </section>
        <section id="second-section">
          <h2 className=" text-[32px] lg:text-5xl text-txt-color mt-16 text-center leading-8 font-sans-medium">
            Making your NEAR <br /> learning easy.
          </h2>
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-center mt-16 lg:mt-44 max-w-[940px] justify-between mx-auto relative isolate">
            <div className="relative">
              <div className="w-full -top-2/3 max-w-[480px] h-[480px] hidden lg:block absolute right-0 bg-hero-bg z-0 blur-[170px]"></div>
              <img
                src="/images/image1.png"
                className=" w-[180px] lg:w-[296px] relative z-10"
                alt="logo"
              />
            </div>

            <div className="px-[22px] flex flex-col items-center lg:items-start">
              <h3 className="text-txt-color text-2xl text-center lg:text-4xl  lg:text-left font-sans-medium">
                Open NEAR wallet
              </h3>
              <p className="text-hero-txt text-base text-center lg:text-left mt-1.5">
                Opening a NEAR wallet is the first step and <br /> essential
                part of joining the NEAR community <br /> as well as starting
                this course.
              </p>
              <a
                href="https://wallet.near.org/"
                className="mt-8 block py-3 px-5 border-hero-txt border-solid border text-zinc-700 text-lg rounded-full tracking-wide"
              >
                Create wallet
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col lg:flex-row gap-4 items-center mt-16 lg:mt-44 max-w-[940px] justify-between mx-auto relative isolate">
            <div className="relative">
              <div className="w-full top-0 max-w-[480px] h-[480px] hidden lg:block absolute -left-28 bg-hero-bg z-0 blur-[170px]"></div>
              <img
                src="/icons/bullseye.svg"
                className=" w-[180px] lg:w-[296px] relative z-10"
                alt="logo"
              />
            </div>

            <div className="px-[22px] flex flex-col items-center lg:items-start">
              <h3 className="text-txt-color text-2xl text-center lg:text-4xl  lg:text-left font-sans-medium relative">
                <img
                  src="/icons/connecter.svg"
                  alt="bent arrow icon"
                  className="hidden lg:block absolute -top-36 -left-28"
                />
                Complete the course
              </h3>
              <div className="flex flex-col gap-6">
                <p className="text-hero-txt text-lg mt-6 text-center lg:text-left">
                  In three simple modules, learn:
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-y-2.5 gap-x-3 text-hero-txt lg:text-lg">
                  <img
                    src="/images/image4.png"
                    className="w-[18px] lg:w-8"
                    alt="icon"
                  />
                  <span>Essential NEAR concepts</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-y-2.5 gap-x-3 text-hero-txt lg:text-lg">
                  <img
                    src="/images/image3.png"
                    className="w-[18px] lg:w-8"
                    alt="icon"
                  />
                  <span>How to write smart contracts on NEAR</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-y-2.5 gap-x-3 text-hero-txt lg:text-lg">
                  <img
                    src="/images/image2.png"
                    className="w-[18px] lg:w-8"
                    alt="icon"
                  />
                  <span>How to build dapps on the NEAR blockchain</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-fit mt-40 flex flex-col items-center px-5">
          <h2 className="text-center font-medium font-sans-medium text-2xl lg:text-4xl text-txt-color relative">
            <img
              src="/icons/connector2.svg"
              alt="bent arrow"
              className="hidden lg:block absolute -top-40 left-64"
            />
            Claim NEAR certificate
          </h2>
          <p className="text-lg text-center leading-6 text-txt-bg opacity-75 max-w-[410px] mb-20">
            Upon course completion, receive the NEAR dev 101 certificate as an
            NFT on your NEAR wallet.
          </p>
          <img
            src="/images/image5.png"
            alt="certificate"
            className="lg:max-w-[644px]"
          />
        </section>
        <section className=" mt-20 flex flex-col lg:flex-row-reverse items-center justify-between lg:px-[148px] relative isolate">
          <img
            src="/images/image6.png"
            alt="near balkans"
            className="w-[180px] lg:w-[400px]"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className=" text-2xl lg:text-4xl font-sans-medium leading-[44px]">
              NEAR Development 101
            </h2>
            <a
              href="https://wallet.near.org/"
              className="mt-8 block py-3 px-5 border-[#e5e7eb] border-solid border text-txt-color text-base rounded-full tracking-wide"
            >
              Start The Course
            </a>
          </div>
          <div className="hidden lg:block w-full bottom-0 h-[120px] absolute -left-28 bg-hero-bg z-0 blur-[159px]"></div>
        </section>
      </main>
      <footer className="bg-white w-full relative z-10">
        <div className="px-[23px] py-24 lg:w-[71%] mx-auto">
          <p className="text-lg text-center">
            Visit <span className="font-sans-medium">nearbalkans.org</span> and
            make sure to follow us on our social and community channels!
          </p>
          <div className="pt-10 flex justify-between lg:justify-center items-center">
            <img
              src="/icons/footer-logo.svg"
              className="hidden lg:block"
              alt="logo"
            />
            <div className="hidden lg:block w-0.5 bg-gray-200 mx-[61px] h-[38px]"></div>
            <img src="/icons/twitter.svg" className="px-3" alt="twitter" />
            <img src="/icons/discord.svg" className="px-3" alt="discord" />
            <img src="/icons/telegram.svg" className="px-3" alt="telegram" />
            <img src="/icons/facebook.svg" className="px-3" alt="facebook" />
            <img src="/icons/linkedin.svg" className="px-3" alt="linkedin" />
            <img src="/icons/instagram.svg" className="px-3" alt="instagram" />
            <img src="/icons/medium.svg" className="px-3" alt="medium" />
          </div>
          <div className="pt-10 flex flex-col items-center lg:items-start lg:flex-row gap-x-10 text-lg cursor-pointer text-txt-color">
            <p>NEAR Balkans 2022</p>
            <p>info@nearbalkans.org</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <p className="pt-[34px] text-center text-lg text-txt-color">
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and Slovenia
          </p>
        </div>
      </footer>
    </>
  );
}
