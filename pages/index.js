// REACT AND NEXT //
// import { useEffect, useState } from "react";
import Head from "next/head";
// COMPONENTS //
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Mainview from "../components/mainview";
// OTHER //

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>pokéfind | home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Mainview>
        <div className="flex flex-col font-light">
          <span className="text-5xl">
            welcome to pokéfind!
          </span>
          <span className="text-2xl my-2">
            pokéfind is a website where you can post and find the latest
            <span className="font-medium"> Pokémon Scarlet and Violet </span>
            raids and trades
          </span>
          {/* <span className="text-2xl my-2">
            creating an account is optional but will let you give and receive
            reviews + make a profile
          </span>
          <div className="flex flex-row justify-center">
            <img width="30" src="star.png"></img>
            <img width="30" src="star.png"></img>
            <img width="30" src="star.png"></img>
            <img width="30" src="star.png"></img>
            <img width="30" src="star.png"></img>
          </div> */}
          <span className="text-2xl my-2">
            click one of the tabs above to get started
          </span>    
          <div className="flex flex-row justify-center mt-2">
          <img width="200" src="https://archives.bulbagarden.net/media/upload/thumb/2/24/Koraidon.png/500px-Koraidon.png"></img>
          <img width="200" src="https://archives.bulbagarden.net/media/upload/thumb/f/fb/Miraidon.png/500px-Miraidon.png"></img>
          </div>
        </div>
      </Mainview>
      <Footer />
    </div>
  );
}
