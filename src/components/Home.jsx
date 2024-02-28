import React from "react";
import Logo from "../images/logo.svg";
import Earth from "../images/earth.svg";
import TV from "../images/tv.png";
import ReactPlayer from "react-player";
import video1 from "../videos/video-tv-jp1.mp4";

const Home = () => {
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
      <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
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
                  width="84%" //ReactPlayerの動画サイズはここで指定する
                  height=""
                />
              </div>
              <img src={TV} alt="" className="relative z-10" /> {/* positionを何か指定しないとz-indexが効かない */}
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
