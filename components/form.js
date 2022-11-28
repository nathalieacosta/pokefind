// REACT AND NEXT //
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
// OTHER //
import Select from "react-select";

export default function Form({ selected }) {
  const pokémon = [
    "Abomasnow",
    "Alomomola",
    "Altaria",
    "Amoonguss",
    "Ampharos",
    "Annihilape",
    "Appletun",
    "Applin",
    "Arboliva",
    "Arcanine",
    "Arctibax",
    "Armarouge",
    "Arrokuda",
    "Avalugg",
    "Axew",
    "Azumarill",
    "Azurill",
    "Bagon",
    "Banette",
    "Barboach",
    "Barraskewda",
    "Basculin",
    "Baxcalibur",
    "Beartic",
    "Bellibolt",
    "Bergmite",
    "Bisharp",
    "Blissey",
    "Bombirdier",
    "Bonsly",
    "Bounsweet",
    "Brambleghast",
    "Bramblin",
    "Braviary",
    "Breloom",
    "Bronzong",
    "Bronzor",
    "Brute Bonnet",
    "Bruxish",
    "Buizel",
    "Cacnea",
    "Cacturne",
    "Camerupt",
    "Capsakid",
    "Carkol",
    "Ceruledge",
    "Cetitan",
    "Cetoddle",
    "Chansey",
    "Charcadet",
    "Chewtle",
    "Chi-Yu",
    "Chien-Pao",
    "Clauncher",
    "Clawitzer",
    "Clodsire",
    "Cloyster",
    "Coalossal",
    "Combee",
    "Copperajah",
    "Corviknight",
    "Corvisquire",
    "Crabominable",
    "Crabrawler",
    "Croagunk",
    "Crocalor",
    "Cryogonal",
    "Cubchoo",
    "Cufant",
    "Cyclizar",
    "Dachsbun",
    "Dedenne",
    "Deerling",
    "Deino",
    "Delibird",
    "Diglett",
    "Ditto",
    "Dolliv",
    "Dondozo",
    "Donphan",
    "Dragalge",
    "Dragapult",
    "Dragonair",
    "Dragonite",
    "Drakloak",
    "Dratini",
    "Drednaw",
    "Dreepy",
    "Drifblim",
    "Drifloon",
    "Drowzee",
    "Dudunsparce",
    "Dugtrio",
    "Dunsparce",
    "Eelektrik",
    "Eelektross",
    "Eevee",
    "Eiscue",
    "Electrode",
    "Espathra",
    "Espeon",
    "Falinks",
    "Farigiraf",
    "Fidough",
    "Finizen",
    "Finneon",
    "Flaaffy",
    "Flabébé",
    "Flamigo",
    "Flapple",
    "Flareon",
    "Fletchinder",
    "Fletchling",
    "Flittle",
    "Floatzel",
    "Floette",
    "Floragato",
    "Florges",
    "Flutter Mane",
    "Fomantis",
    "Foongus",
    "Forretress",
    "Fraxure",
    "Frigibax",
    "Froslass",
    "Frosmoth",
    "Fuecoco",
    "Gabite",
    "Gallade",
    "Garchomp",
    "Gardevoir",
    "Garganacl",
    "Gastly",
    "Gastrodon",
    "Gengar",
    "Gholdengo",
    "Gible",
    "Gimmighoul",
    "Girafarig",
    "Glaceon",
    "Glalie",
    "Glimmet",
    "Glimmora",
    "Gogoat",
    "Golduck",
    "Goodra",
    "Goomy",
    "Gothita",
    "Gothitelle",
    "Gothorita",
    "Grafaiai",
    "Great Tusk",
    "Greavard",
    "Greedent",
    "Grimer",
    "Grimmsnarl",
    "Growlithe",
    "Grumpig",
    "Gulpin",
    "Gumshoos",
    "Gyarados",
    "Happiny",
    "Hariyama",
    "Hatenna",
    "Hatterene",
    "Hattrem",
    "Haunter",
    "Hawlucha",
    "Haxorus",
    "Heracross",
    "Hippopotas",
    "Hippowdon",
    "Honchkrow",
    "Hoppip",
    "Houndoom",
    "Houndour",
    "Houndstone",
    "Hydreigon",
    "Hypno",
    "Igglybuff",
    "Impidimp",
    "Indeedee",
    "Iron Bundle",
    "Iron Hands",
    "Iron Jugulis",
    "Iron Moth",
    "Iron Thorns",
    "Iron Treads",
    "Iron Valiant",
    "Jigglypuff",
    "Jolteon",
    "Jumpluff",
    "Kilowattrel",
    "Kingambit",
    "Kirlia",
    "Klawf",
    "Klefki",
    "Komala",
    "Koraidon",
    "Kricketot",
    "Kricketune",
    "Krokorok",
    "Krookodile",
    "Larvesta",
    "Larvitar",
    "Leafeon",
    "Lechonk",
    "Lilligant",
    "Litleo",
    "Lokix",
    "Lucario",
    "Lumineon",
    "Lurantis",
    "Luvdisc",
    "Luxio",
    "Luxray",
    "Lycanroc",
    "Mabosstiff",
    "Magikarp",
    "Magnemite",
    "Magneton",
    "Magnezone",
    "Makuhita",
    "Mankey",
    "Mareanie",
    "Mareep",
    "Marill",
    "Maschiff",
    "Masquerain",
    "Maushold",
    "Medicham",
    "Meditite",
    "Meowscarada",
    "Meowth",
    "Mimikyu",
    "Miraidon",
    "Misdreavus",
    "Mismagius",
    "Morgrem",
    "Mudbray",
    "Mudsdale",
    "Muk",
    "Murkrow",
    "Nacli",
    "Naclstack",
    "Noibat",
    "Noivern",
    "Numel",
    "Nymble",
    "Oinkologne",
    "Oranguru",
    "Oricorio",
    "Orthworm",
    "Pachirisu",
    "Palafin",
    "Palossand",
    "Passimian",
    "Pawmi",
    "Pawmo",
    "Pawmot",
    "Pawniard",
    "Pelipper",
    "Persian",
    "Petilil",
    "Phanpy",
    "Pichu",
    "Pikachu",
    "Pincurchin",
    "Pineco",
    "Polteageist",
    "Primeape",
    "Psyduck",
    "Pupitar",
    "Pyroar",
    "Quaquaval",
    "Quaxly",
    "Quaxwell",
    "Qwilfish",
    "Rabsca",
    "Raichu",
    "Ralts",
    "Rellor",
    "Revavroom",
    "Riolu",
    "Roaring Moon",
    "Rockruff",
    "Rolycoly",
    "Rookidee",
    "Rotom",
    "Rufflet",
    "Sableye",
    "Salamence",
    "Salandit",
    "Salazzle",
    "Sandaconda",
    "Sandile",
    "Sandy Shocks",
    "Sandygast",
    "Sawsbuck",
    "Scatterbug",
    "Scizor",
    "Scovillain",
    "Scream Tail",
    "Scyther",
    "Seviper",
    "Shelgon",
    "Shellder",
    "Shellos",
    "Shinx",
    "Shroodle",
    "Shroomish",
    "Shuppet",
    "Silicobra",
    "Sinistea",
    "Skeledirge",
    "Skiddo",
    "Skiploom",
    "Skrelp",
    "Skuntank",
    "Skwovet",
    "Slaking",
    "Slakoth",
    "Sliggoo",
    "Slither Wing",
    "Slowbro",
    "Slowking",
    "Slowpoke",
    "Smoliv",
    "Sneasel",
    "Snom",
    "Snorunt",
    "Snover",
    "Spewpa",
    "Spidops",
    "Spiritomb",
    "Spoink",
    "Sprigatito",
    "Squawkabilly",
    "Stantler",
    "Staraptor",
    "Staravia",
    "Starly",
    "Steenee",
    "Stonjourner",
    "Stunky",
    "Sudowoodo",
    "Sunflora",
    "Sunkern",
    "Surskit",
    "Swablu",
    "Swalot",
    "Sylveon",
    "Tadbulb",
    "Talonflame",
    "Tandemaus",
    "Tarountula",
    "Tatsugiri",
    "Tauros",
    "Teddiursa",
    "Ting-Lu",
    "Tinkatink",
    "Tinkaton",
    "Tinkatuff",
    "Toedscool",
    "Toedscruel",
    "Torkoal",
    "Toxapex",
    "Toxel",
    "Toxicroak",
    "Toxtricity",
    "Tropius",
    "Tsareena",
    "Tynamo",
    "Tyranitar",
    "Umbreon",
    "Ursaring",
    "Vaporeon",
    "Varoom",
    "Veluza",
    "Venomoth",
    "Venonat",
    "Vespiquen",
    "Vigoroth",
    "Vivillon",
    "Volcarona",
    "Voltorb",
    "Wattrel",
    "Weavile",
    "Whiscash",
    "Wigglytuff",
    "Wiglett",
    "Wingull",
    "Wo-Chien",
    "Wooper",
    "Wugtrio",
    "Yungoos",
    "Zangoose",
    "Zoroark",
    "Zorua",
    "Zweilous",
  ];
  pokémon.forEach((element, index) => {
    pokémon[index] = { value: element, label: element };
  });

  const stars = [1, 2, 3, 4, 5, 6, 7];
  stars.forEach((element, index) => {
    stars[index] = { value: element, label: element };
  });

  const teraType = [
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ];
  teraType.forEach((element, index) => {
    teraType[index] = { value: element, label: element };
  });

  const [raid, setRaid] = useState({pokémon: "", teraType: "", stars: "", linkCode: ""})
  const postRaid = async (form) => {
    try {
      const res = await fetch("/api/raids", {
        method: "POST",
        body: JSON.stringify(form)
      })
    }  catch (err) {
      console.log(err);
    }
  }

  const handleChange = (selector, e) => {
    if (selector == "pokémon") {
      setRaid(prevState => ({
        ...prevState, pokémon: e.value
      }));
    }
    else if (selector == "teraType") {
      setRaid(prevState => ({
        ...prevState, teraType: e.value
      }));
    }
    else if (selector == "stars") {
      setRaid(prevState => ({
        ...prevState, stars: e.value
      }));
    }
    else if (selector == "linkCode") {
      setRaid(prevState => ({
        ...prevState, linkCode: e.target.value.toUpperCase()
      }));
    }
  }

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    postRaid(raid);
    router.push("/raids")
  }

  return (
    <div>
    <form action="/api/raids" method="POST" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center bg-slate-700 rounded-3xl p-5 m-2">
        <div className="flex flex-col m-auto">
          <label>pokémon</label>
          <Select
            className="text-black"
            name="pokémon"
            options={pokémon}
            isClearable={false}
            isSearchable={true}
            onChange={(e) => handleChange("pokémon", e)}
          />
        </div>
        <div className="flex flex-col m-auto">
          <label>tera type</label>
          <Select
            className="text-black"
            name="teraType"
            options={teraType}
            isClearable={false}
            isSearachable={true}
            onChange={(e) => handleChange("teraType", e)}
          />
        </div>
        <div className="flex flex-col m-auto">
          <label>number of ★</label>
          <Select
            className="text-black"
            name="stars"
            options={stars}
            isClearable={false}
            isSearchable={true}
            onChange={(e) => handleChange("stars", e)}
          />
        </div>
        <div className="flex flex-col m-auto">
          <label>link code</label>
          <input
            className="text-black p-2 rounded-xl font-medium"
            type="text"
            name="linkCode"
            value={raid.linkCode}
            onChange={(e) => handleChange("linkCode", e)}
            minLength="6"
            maxLength="6"
            required
          ></input>
        </div>
        <button className="bg-slate-300 text-black p-3 rounded-3xl" type="submit">submit</button>
      </div>
    </form>
    </div>
  );
}
