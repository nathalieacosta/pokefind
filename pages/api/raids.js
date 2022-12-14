import dbConnect from "../../lib/dbConnect";
import Raid from "../../models/Raid";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const raids = await Raid.find({});
        res.status(200).json({ success: true, data: raids });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: "server error" });
      }
      break;
    case "POST":
      try {
        const { pokemon, teraType, stars, linkCode } = JSON.parse(req.body);
        if (!pokemon || !teraType || !stars || !linkCode) {
          return res
            .status(400)
            .json({ success: false, message: "please fill out all fields" });
        }
        if (linkCode.length < 6) {
          return res
            .status(400)
            .json({
              success: false,
              message: "please enter a valid link code",
            });
        }

        const raid = await Raid.create({
          pokemon,
          teraType,
          stars,
          linkCode,
        });

        res.status(201).json({ success: true, data: raid });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: "server error" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "server error" });
      break;
  }
}
