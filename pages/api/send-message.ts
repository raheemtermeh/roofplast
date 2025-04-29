import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, message } = req.body;

    const header = {
      "Content-Type": "application/json",
    };
    const url_log = "https://5040-tm.linooxel.com/api/send-message/";
    const data_send = {
      username: "-1002170800790", 
      id_robot: "8119470710:AAHMPO0abYO7exHPIL4_BMXvB1IAz-o3FGs", // آیدی ربات استاتیک
      message: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      const response = await fetch(url_log, {
        method: "POST",
        headers: header,
        body: JSON.stringify(data_send),
      });

      if (response.ok) {
        return res
          .status(200)
          .json({ success: true, message: "پیام با موفقیت ارسال شد!" });
      } else {
        return res
          .status(response.status)
          .json({ success: false, message: "خطایی رخ داده است." });
          console.log(response);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      return res
        .status(500)
        .json({ success: false, message: "خطایی در ارسال پیام رخ داده است." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
