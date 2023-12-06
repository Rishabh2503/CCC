import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/NavBar/Navbar";
import { Vector1 } from "@/assest/Icons/Vector1";
import { LeftArrow } from "@/assest/Icons/LeftArrow";
import { RightArrow } from "@/assest/Icons/RightArrow";
import CCC from "@/assest/Images/CCCLogo.png"
import styles from '../styles/index.module.css';
const Home = () => {
  return (
    <div>
      <Head>
      <title>Cloud Computing Cell</title>
        <div className="relative">
          <Image
            src="/assest/Images/Rohit.svg"
            alt="Rohit Negi"
            width={500}
            height={300}
            className="fixed top-0 right-0"
            style={{ width: "26%", height: "auto" }}
            priority
          />
          
        </div>
        </Head>
      <main>
        <div className="align-left">
          <Navbar />
        </div>
      
          <div className="flex items-center m-16 space-x-8">
            <LeftArrow />
            <p className={styles.Tech}>Tech Buzz</p>
            <Vector1 />
            <Image src={CCC} width={100} height={100} priority />
            <p className={styles.Cloud}>Cloud Computing Cell</p>
            <RightArrow />
          </div>
          
      </main>
    </div>
  );
};

export default Home;
