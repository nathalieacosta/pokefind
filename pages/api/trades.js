import dbConnect from "../../lib/dbConnect";
import Trade from "../../models/Trade";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const raids = await Trade.find({});
        res.status(200).json({ success: true, data: raids });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: "server error" });
      }
      break;
    case "POST":
      try {
        const { text, contact } = JSON.parse(req.body);
        if (!text || !contact) {
          return res
            .status(400)
            .json({ success: false, message: "please fill out all fields" });
        }

        if (text.length > 50 || contact.length > 50) {
            return res.status(400).json({success: false, message: "please do not go over 50 characters"})
        }

        const trade = await Trade.create({
          text,
          contact
        });
        res.status(201).json({ success: true, data: trade });
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
