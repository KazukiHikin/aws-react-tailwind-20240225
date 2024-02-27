import React from "react";
import Logo from "../images/logo.svg";
import Earth from "../images/earth.svg";

const Home = () => {
  return (
    <>
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
                  <img src={Earth} alt="" className="w-4 absolute top-[10px] left-[5px]"/>
                  <select
                    name=""
                    id=""
                    className="bg-black text-white sm:p-[5px_25px] p-[5px_20px] border-white border rounded"
                  >
                    <option value="">English</option>
                    <option value="">日本語</option>
                  </select>
                </div>
                <button className="bg-red-600 text-white px-3 rounded">
                  Sign In
                </button>
              </div>
            </div>
          </header>

        </div>
      </div>
    </>
  );
};

export default Home;
