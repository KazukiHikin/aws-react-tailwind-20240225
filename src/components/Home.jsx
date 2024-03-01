import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Earth from "../images/earth.svg";
import TV from "../images/tv.png";
import ReactPlayer from "react-player";
import video1 from "../videos/video-tv-jp1.mp4";
import Mobile from "../images/mobile-0819.jpg";
import BoxShot from "../images/boxshot.png";
import DownloadIcon from "../videos/download-icon.gif";
import DeviceMac from "../images/device-pile-jp.png";
import video2 from "../videos/video2.mp4";
import Kids from "../images/kids.png";

const Home = () => {
  const [activeQuestion, setActiveQuestion] = useState("");

  return (
    <>
      {/* banner Section */}
      <div className=" w-[100%] h-[100vh] bg-[url('./images/bannerImage.jpg')] bg-center bg-cover ">
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[1170px] mx-auto ">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] pt-4 items-center">
              <figure>
                <img
                  src={Logo}
                  className="w-[148px]"
                  alt="ロゴ読めてないです"
                />
              </figure>
              <div className="flex justify-end gap-3">
                <div className="relative">
                  <img
                    src={Earth}
                    alt=""
                    className="w-4 absolute top-[10px] left-[5px]"
                  />
                  <select
                    name=""
                    id=""
                    className="bg-black text-white sm:p-[5px_25px] p-[5px_20px] border-white border rounded"
                  >
                    <option value="">English</option>
                    <option value="">日本語</option>
                  </select>
                </div>
                <button className="bg-red-600 text-white px-3 rounded hover:bg-[rgb(193,17,25)] transition-all duration-300">
                  Sign In
                </button>
              </div>
            </div>
          </header>
          {/* Top */}
          <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white">
            <h1 className="sm:text-5xl text-4xl font-bold ">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className=" text-[20px] py-[15px]">
              Watch anywhere. Cancel anytime.
            </h4>
            <p className=" text-[20px] py-[20px]">
              Ready to watch? Enter your email to crat or restart your
              membership
            </p>
            <div className="max-w-[700px] mx-auto mt-7 sm:px-3 px-10">
              <form
                action=""
                className="grid sm:grid-cols-[70%_Auto] grid-cols-1 gap-5 items-center"
              >
                <input
                  type="text"
                  className=" text-lg h-12 pl-5 border border-white bg-[transparent]"
                  placeholder="Email Address"
                />
                <button className="text-2xl bg-red-600 text-white px-3 py-3 rounded hover:bg-[rgb(193,17,25)] transition-all duration-300">
                  Get Started ＞
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Enjoy on your Start Section */}
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-start items-center">
            <div className="text-white">
              <h2 className="sm:text-5xl text-3xl font-bold">
                Enjoy on your TV
              </h2>
              <p className="sm:text-xl text-base pt-4">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, <br />
                Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <figure className="relative ">
              <div className=" absolute top-[21%] left-[13%] z-0">
                <ReactPlayer
                  url={video1}
                  // controls
                  loop={true} // ループ再生を有効にする
                  playing={true} // 自動再生を有効にする
                  muted={true} //ミュートを有効,ミュート有効だと自動再生される
                  width="87%" //ReactPlayerの動画サイズはここで指定する
                  height=""
                />
              </div>
              <img src={TV} alt="" className="relative z-10" />{" "}
              {/* positionを何か指定しないとz-indexが効かない */}
            </figure>
          </div>
        </div>
      </section>
      {/* DoenLoad Section Start */}
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-start items-center">
            <figure className="relative sm:order-1 order-2">
              <img src={Mobile} alt="" className="" />
              <div className="flex bg-black border-2 border-[rgba(128,128,128,0.7)] rounded-xl h-[70px] w-[80%] lg:w-[50%] mx-auto items-center absolute left-[10%] lg:left-[25%] bottom-[8%]">
                <img src={BoxShot} alt="" className="h-[48px] ml-3 mr-3" />
                <div className="w-[80%]">
                  <p className="text-white font-bold">Stranger Things</p>
                  <p className="text-blue-700">Downloading...</p>
                </div>
                <img src={DownloadIcon} alt="" className="w-12 h-12 md:mr-4" />
              </div>
            </figure>
            <div className="text-white sm:order-2 order-1">
              <h2 className="sm:text-[50px] text-[2rem] font-bold sm:leading-[60px] leading-[40px]">
                Download your shows to watch offline
              </h2>
              <p className="sm:text-xl text-base pt-4">
                Save your favourites easily and always have something to watch
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Watch everywhere Section */}
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-start items-center">
            <div className="text-white">
              <h2 className="sm:text-5xl text-3xl font-bold">
                Watch everywhere
              </h2>
              <p className="sm:text-xl text-base pt-4">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <figure className="relative ">
              <div className=" absolute top-[10%] left-[18%] z-0">
                <ReactPlayer
                  url={video2}
                  // controls
                  loop={true} // ループ再生を有効にする
                  playing={true} // 自動再生を有効にする
                  muted={true} //ミュートを有効,ミュート有効だと自動再生される
                  width="76%" //ReactPlayerの動画サイズはここで指定する
                  height=""
                />
              </div>
              <img src={DeviceMac} alt="" className="relative z-10" />
              {/* positionを何か指定しないとz-indexが効かない */}
            </figure>
          </div>
        </div>
      </section>
      {/* Creat profiles for kids Section */}
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-start items-center">
            <figure className="relative sm:order-1 order-2">
              <img src={Kids} alt="" className="" />
            </figure>
            <div className="text-white sm:order-2 order-1">
              <h2 className="sm:text-[50px] text-[2rem] font-bold sm:leading-[60px] leading-[40px]">
                Create profiles for kids
              </h2>
              <p className="sm:text-xl text-base pt-4">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Asked Questions Section */}
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-4 ">
          <h2 className="sm:text-5xl text-3xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="py-[30px]">
            {/* Question1 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question1") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question1");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">What is Netflix?</h3>
                <span>{activeQuestion === "question1" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question1"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.{" "}
                </p>
                <br />
                <p>
                  You can watch as much as you want, whenever you want – all for
                  one low monthly price. There's always something new to
                  discover and new TV shows and movies are added every week!
                </p>
              </div>
            </div>
            {/* Question2 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question2") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question2");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">How much does Netflix cost?</h3>
                <span>{activeQuestion === "question2" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question2"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from JPY 1,980 to JPY 790 a month. No extra costs, no
                  contracts.
                </p>
              </div>
            </div>
            {/* Question3 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question3") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question3");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">Where can I watch?</h3>
                <span>{activeQuestion === "question3" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question3"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </p>
                <br />
                <p>
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </div>
            {/* Question4 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question4") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question4");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">How do I cancel?</h3>
                <span>{activeQuestion === "question4" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question4"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </div>
            {/* Question5 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question5") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question5");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">What can I watch on Netflix?</h3>
                <span>{activeQuestion === "question5" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question5"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>
            {/* Question6 */}
            <div className="bg-[rgb(45,45,45)] text-white mb-[15px]">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300 items-center"
                onClick={() => {
                  if (activeQuestion === "question6") {
                    setActiveQuestion("");
                  } else {
                    setActiveQuestion("question6");
                  }
                }}
              >
                <h3 className="text-[18px] md:text-[24px]">Is Netflix good for kids?</h3>
                <span>{activeQuestion === "question6" ? "×" : "+"}</span>
              </div>
              <div
                className={`${
                  activeQuestion === "question6"
                    ? " scale-y-100 h-[auto] p-5"
                    : " scale-y-0 h-[0px] "
                } duration-300 origin-top text-[18px] md:text-[24px]`}
              >
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                </p>
                <br />
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>
          {/* mailInput */}
          <p className=" text-[20px] py-[20px] text-white text-center">
              Ready to watch? Enter your email to crat or restart your
              membership
            </p>
            <div className="max-w-[700px] mx-auto mt-7 sm:px-3 px-10">
              <form
                action=""
                className="grid sm:grid-cols-[70%_Auto] grid-cols-1 gap-5 items-center"
              >
                <input
                  type="text"
                  className=" text-lg h-12 pl-5 border border-white bg-[transparent]"
                  placeholder="Email Address"
                />
                <button className="text-2xl bg-red-600 text-white px-3 py-3 rounded hover:bg-[rgb(193,17,25)] transition-all duration-300">
                  Get Started ＞
                </button>
              </form>
            </div>
        </div>
      </section>
      {/* Footer Section */}


    </>
  );
};

export default Home;
