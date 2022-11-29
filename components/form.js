// REACT AND NEXT //
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
// OTHER //
import { pokemon } from "../lib/pokemon";
import { teraType } from "../lib/teraType";
import Select from "react-select";
import Message from "./message";

export default function Form({page}) {
  let pokemonList = [];
  pokemon.forEach((element, index) => {
    pokemonList[index] = { value: element, label: element };
  });

  const stars = [1, 2, 3, 4, 5, 6, 7];
  stars.forEach((element, index) => {
    stars[index] = { value: element, label: element };
  });

  let teraList = [];
  teraType.forEach((element, index) => {
    teraList[index] = { value: element, label: element };
  });

  const [raid, setRaid] = useState({
    pokemon: "",
    teraType: "",
    stars: "",
    linkCode: "",
  });

  const postRaid = async (form) => {
    try {
      const res = await fetch("/api/raids", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (res.status != 200)
      {
        const json = await res.json();
        setMessage(json.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRaidChange = (selector, e) => {
    if (selector == "pokemon") {
      setRaid((prevState) => ({
        ...prevState,
        pokemon: e.value,
      }));
    } else if (selector == "teraType") {
      setRaid((prevState) => ({
        ...prevState,
        teraType: e.value,
      }));
    } else if (selector == "stars") {
      setRaid((prevState) => ({
        ...prevState,
        stars: e.value,
      }));
    } else if (selector == "linkCode") {
      setRaid((prevState) => ({
        ...prevState,
        linkCode: e.target.value.toUpperCase(),
      }));
    }
  };

  const handleRaidSubmit = (e) => {
    e.preventDefault();
    postRaid(raid);
    router.push("/raids");
  };


  const [trade, setTrade] = useState({
    text: "",
    contact: ""
  });

  const postTrade = async (form) => {
    try {
      const res = await fetch("/api/trades", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (res.status != 200)
      {
        const json = await res.json();
        setMessage(json.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTradeChange = (selector, e) => {
    if (selector == "text")
    {
      setTrade((prevState) => ({...prevState, text: e.target.value}))
    } else if (selector == "contact") {
      setTrade((prevState) => ({...prevState, contact: e.target.value}))
    }
  }

  const handleTradeSubmit = (e) => {
    e.preventDefault();
    postTrade(trade);
    router.push("/trades");
  }

  const [message, setMessage] = useState("");

  const router = useRouter();

  if (page == "raids") return (
    <div>
      <Message message={message} />
      <form action="/api/raids" method="POST" onSubmit={handleRaidSubmit}>
        <div className="flex flex-col md:flex-row justify-center bg-slate-700 rounded-3xl p-5 m-">
          <div className="flex flex-col m-auto">
            <label>pokémon</label>
            <Select
              className="text-black"
              name="pokemon"
              options={pokemonList}
              isClearable={false}
              isSearchable={true}
              onChange={(e) => handleRaidChange("pokemon", e)}
            />
          </div>
          <div className="flex flex-col m-auto">
            <label>tera type</label>
            <Select
              className="text-black"
              name="teraType"
              options={teraList}
              isClearable={false}
              isSearachable={true}
              onChange={(e) => handleRaidChange("teraType", e)}
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
              onChange={(e) => handleRaidChange("stars", e)}
            />
          </div>
          <div className="flex flex-col m-auto">
            <label>link code</label>
            <input
              className="text-black p-2 rounded-xl font-medium"
              type="text"
              name="linkCode"
              value={raid.linkCode}
              onChange={(e) => handleRaidChange("linkCode", e)}
              minLength="6"
              maxLength="6"
              required
            ></input>
          </div>
          <button
            className="mt-5 mx-auto bg-slate-300 text-black py-2 px-5 rounded-3xl"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
  else if (page == "trades") return (
    <div>
    <Message message={message} />
    <form action="/api/trades" method="POST" onSubmit={handleTradeSubmit}>
      <div className="flex flex-col md:flex-row justify-center bg-slate-700 rounded-3xl p-5 m-">
        <div className="flex flex-col m-auto">
          <label>title</label>
          <input
            className="text-black p-5 w-[400px] rounded-xl font-medium"
            type="text"
            name="linkCode"
            value={trade.linkCode}
            onChange={(e) => handleTradeChange("text", e)}
            placeholder="what you're looking for/offering, include details"
            minLength="1"
            maxLength="50"
            required
          ></input>
        </div>
        <div className="flex flex-col m-auto">
          <label>contact me at</label>
          <input
            className="text-black p-5 w-[400px] rounded-xl font-medium"
            type="text"
            name="contact"
            value={trade.contact}
            onChange={(e) => handleTradeChange("contact", e)}
            placeholder="type a discord to be safe, don't use personal info"
            minLength="1"
            maxLength="50"
            required
          ></input>
        </div>
        <button
          className="mt-5 mx-auto bg-slate-300 text-black py-2 px-5 rounded-3xl"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  </div>
  )
}
