// REACT AND NEXT //
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// COMPONENTS //
import Footer from "../components/footer";
import Form from "../components/form";
import Navbar from "../components/navbar";
import Mainview from "../components/mainview";
import dbConnect from "../lib/dbConnect";
import Raid from "../models/Raid";
// OTHER //

export default function Raids({ raids }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/raids");
  };

  return (
    <div className="">
      <Head>
        <title>pokéfind | raids</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Mainview>
        <div className="flex flex-col font-light">
          <span className="text-4xl">post a raid</span>
          <span className="text-xl">all fields are required! post once every 3 minutes!</span>
          <Form />
          <span className="text-4xl">view raids (last 3 minutes)</span>
          <button
            className="text-2xl bg-slate-400 my-2 mx-auto p-4 rounded-3xl"
            onClick={handleClick}
          >
            refresh
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {raids.map((raid) => (
            <div
              className="text-2xl bg-slate-700 rounded-2xl p-5 my-4 mx-10"
              key={raid._id}
            >
              <div className="flex flex-row m-auto justify-center">
                <div>
                  <span className="font-medium mx-3">{raid.pokémon}</span>
                  <img className="mx-3" width="100" src={raid.teraType}></img>
                  <img className="mx-3" width="100" src={raid.pokePic}></img>
                </div>
                <div className="flex flex-col my-auto">
                  <span className="mx-3 my-2">{raid.stars}★</span>
                  code: {raid.linkCode}
                  <span className="mx-3 my-2">
                    {raid.minutes}:{raid.seconds}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Mainview>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const now = new Date();
  const getMinutes = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec - minutes * 60;
    return { minutes: minutes, seconds: seconds };
  };
  const result = await Raid.find({
    createdAt: { $gte: now - 60000 * 3, $lt: now },
  }).sort({ createdAt: -1 });

  const raids = result.map((doc) => {
    const timeRemaining = getMinutes(
      180 - Math.round(Math.abs(now.getTime() - doc.createdAt.getTime()) / 1000)
    );
    if (timeRemaining.seconds.toString().length < 2) {
      timeRemaining.seconds = "0" + timeRemaining.seconds;
    }

    const pokePic =
      "https://img.pokemondb.net/sprites/scarlet-violet/normal/" +
      doc.pokémon.toLowerCase() +
      ".png";

    let teraPic = "";
    switch (doc.teraType) {
      case "Normal":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/9/9a/NormalIC_Tera.png";
        break;
      case "Fighting":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/e/ea/FightingIC_Tera.png";
        break;
      case "Flying":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/4/44/FlyingIC_Tera.png";
        break;
      case "Poison":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/d/db/PoisonIC_Tera.png";
        break;
      case "Ground":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/2/22/GroundIC_Tera.png";
        break;
      case "Rock":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/5/5f/RockIC_Tera.png";
        break;
      case "Bug":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/2/2e/BugIC_Tera.png";
        break;
      case "Ghost":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/0/04/GhostIC_Tera.png";
        break;
      case "Steel":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/2/26/SteelIC_Tera.png";
        break;
      case "Fire":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/e/eb/FireIC_Tera.png";
        break;
      case "Water":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/c/c0/WaterIC_Tera.png";
        break;
      case "Grass":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/4/48/GrassIC_Tera.png";
        break;
      case "Electric":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/7/7b/ElectricIC_Tera.png";
        break;
      case "Psychic":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/f/fd/PsychicIC_Tera.png";
        break;
      case "Ice":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/5/5f/IceIC_Tera.png";
        break;
      case "Dragon":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/6/65/DragonIC_Tera.png";
        break;
      case "Dark":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/f/f2/DarkIC_Tera.png";
        break;
      case "Fairy":
        teraPic =
          "https://archives.bulbagarden.net/media/upload/5/5d/FairyIC_Tera.png";
        break;
    }

    return {
      id: doc._id.toString(),
      pokémon: doc.pokémon,
      pokePic: pokePic,
      teraType: teraPic,
      stars: doc.stars,
      linkCode: doc.linkCode,
      minutes: timeRemaining.minutes,
      seconds: timeRemaining.seconds,
    };
  });

  return { props: { raids: raids } };
}