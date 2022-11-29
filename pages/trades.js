// REACT AND NEXT //
import { useRouter } from "next/router";
import Head from "next/head";
// COMPONENTS //
import Footer from "../components/footer";
import Form from "../components/form";
import Navbar from "../components/navbar";
import Mainview from "../components/mainview";
import dbConnect from "../lib/dbConnect";
import Trade from "../models/Trade";
// OTHER //

export default function Raids({ trades }) {
  const router = useRouter();
  const handleClick = () => {
    router.replace(router.asPath);
  };

  return (
    <div className="">
      <Head>
        <title>pokéfind | trades</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Mainview>
        <div className="flex flex-col font-light">
          <span className="text-4xl mb-2">post a trade</span>
          <Form page="trades"/>
          <span className="text-4xl mt-2">view trades (last 1 day)</span>
          <button
            className="text-2xl bg-slate-400 my-2 mx-auto p-4 rounded-3xl"
            onClick={handleClick}
          >
            refresh
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-center mb-8">
          {trades.map((trade) => (
            <div
              className="text-2xl bg-slate-700 rounded-2xl p-5 w-full my-4 mx-10"
              key={trade._id}
            >
              <div className="flex flex-col m-auto justify-center">
                  <span className="font-medium mx-3">{trade.text}</span>
                  <span className="mx-3">contact me at: {trade.contact}</span>
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
  const result = await Trade.find({
    createdAt: { $gte: now - 60000 * 60 * 24, $lt: now },
  }).sort({ createdAt: -1 });

  const trades = result.map((doc) => {
    const timeRemaining = getMinutes(
      86400 - Math.round(Math.abs(now.getTime() - doc.createdAt.getTime()) / 1000)
    );
    if (timeRemaining.seconds.toString().length < 2) {
      timeRemaining.seconds = "0" + timeRemaining.seconds;
    }
    return {
      id: doc._id.toString(),
      text: doc.text,
      contact: doc.contact,
      minutes: timeRemaining.minutes,
      seconds: timeRemaining.seconds,
    };
  });

  return { props: { trades: trades } };
}
