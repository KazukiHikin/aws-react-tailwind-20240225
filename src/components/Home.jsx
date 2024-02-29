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
  const [clickState, setClickState] = useState(false);
  const isActive = () => {
    setClickState(!clickState);
  };

  console.log(clickState);
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
            <div className="bg-[rgb(45,45,45)] text-white">
              <div
                className="p-[20px] text-[30px] border-b-2 border-black flex cursor-pointer justify-between hover:bg-[rgb(65,65,65)] transition-all duration-300"
                onClick={isActive}
              >
                <h3>What is Netflix?</h3>
                <span>{clickState ? "×":"+"}</span>

              </div>
              <div
                className={`${
                  clickState === true ? "transition-all duration-500 transform origin-top ease-in" : "hidden"
                } `}
              >
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want – all for
                  one low monthly price. There's always something new to
                  discover and new TV shows and movies are added every week!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
