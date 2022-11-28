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
        const { pokémon, teraType, stars, linkCode } = JSON.parse(req.body);
        console.log(req.body);
        if (!pokémon || !teraType || !stars || !linkCode) {
          return res
            .status(400)
            .json({ success: false, message: "please fill out all fields" });
        }

        const raid = await Raid.create({
          pokémon,
          teraType,
          stars,
          linkCode,
        });
        console.log(raid);
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
