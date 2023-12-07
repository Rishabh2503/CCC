import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/NavBar/Navbar";
import { Vector1 } from "@/assest/Icons/Vector1";
import { LeftArrow } from "@/assest/Icons/LeftArrow";
import { RightArrow } from "@/assest/Icons/RightArrow";
import CCC from "@/assest/Images/CCCLogo.png";
import styles from "../styles/index.module.css";
import { Location } from "@/assest/Icons/Loction";
import { Calendar } from "@/assest/Icons/Calender";
import CustomButton from "@/components/Button/Button";
import HorizontalLine from "@/assest/Images/Line";
import Faculty from "./Faculty";
import ParticleArea from "@/components/Particles/ParticleArea";

const Home = () => {
  return (
   <>
      <Head>
        <title>Cloud Computing Cell</title>
        </Head>
        <ParticleArea />
        <div>
        <div className="relative">
          <Image
            src="/assest/Images/Rohit.svg"
            alt="Rohit Negi"
            width={500}
            height={300}
            className="absolute top-0 right-0"
            style={{ width: "35%", height: "auto" }}
            priority
          />
        </div>
        </div>
      <main> 
      {/* NavBar */}
        <div className="align-left">
          <Navbar />
        </div>
        
        {/* Title */}
        <div className="flex items-center m-16 space-x-16">
          <LeftArrow />
          <p className={styles.Tech}>Tech Buzz</p>
          <Vector1 />
          <div className="flex items-center  space-x-8">
            <Image src={CCC} width={100} height={100} priority />
            <p className={styles.Cloud}>Cloud Computing Cell</p>
          </div>
          <RightArrow />
        </div>
        <div className="flex space-x-64 items-center pl-[13%]">
          <div className="flex items-center">
            <Location />
            <p className="text-white m-4 w-32 text-1xl">
              <bold className="font-bold">CS/IT</bold> <br />
              Seminar Hall
            </p>
          </div>
          <div className="flex items-center">
            <Calendar />
            <p className="text-white m-4 w-32">
              Date : 15 Dec <br /> 4:00 PM onwards
            </p>
          </div>
        </div>

        {/* Speaker */}
        <div className="absolute right-[1%] text-right text-2xl text-slate-100 mt-8">
          <p className="text-3xl mb-2">
            <b>Speaker</b>
          </p>
        
          <p className="mb-1">Rohit Negi</p>
          <p>
            IIT Guwahati|Ex-UBER-SDE <br />
            Got Highest Placement in India of 2Cr+|150K+ Youtube
          </p>
        </div>
        <div className=" mt-[5%] ml-[12%] w-[12%]">
        
        <CustomButton  />
        </div>
        <div className="mt-[12%]">
        <HorizontalLine />
        </div>
        {/* Faculty */}
        <div>
        <Faculty/>
        </div>
        
        
        
      </main>
      </>
    
  );
};

export default Home;
