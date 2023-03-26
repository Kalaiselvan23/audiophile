import React from "react";
import facebook from "../../images/shared/desktop/icon-facebook.svg";
import instagram from "../../images/shared/desktop/icon-instagram.svg"
import twitter from "../../images/shared/desktop/icon-twitter.svg"
export default function Footer() {
  return (
    <div className="bg-[#191919] text-white h-72 mt-16">
      <div className="flex justify-between w-[70%] mx-auto p-10">
        <span className="font-bold text-2xl my-auto">audiophile</span>
        <ul className="flex justify-between w-[50%]">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
        </ul>
      </div>
      <div className="w-[70%] mx-auto flex justify-between">
        <p className="w-[60%] mx-10 font-thin">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className="flex gap-10 h-6 mr-8">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
        </div>
      </div>
      <p className="w-[65%] mx-auto my-16 font-thin">Copyright 2021. All Rights Reserved</p>
    </div>
  );
}
