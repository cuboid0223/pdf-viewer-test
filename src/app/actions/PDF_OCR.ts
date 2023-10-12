"use server";
import { promises as fs } from "fs";

export async function PDF_OCR() {
  // ...
  const vision = require("@google-cloud/vision");
  const process = require("process");

  const file = await fs.readFile(
    process.cwd() + "/public/API_key.json",
    "utf8"
  );
  const data = JSON.parse(file);
  // console.log(data);
  const CONFIG = {
    credentials: {
      private_key: data.private_key,
      client_email: data.client_email,
    },
  };

  // Creates a client
  // https://googleapis.dev/nodejs/vision/latest/v1.ImageAnnotatorClient.html

  const client = new vision.ImageAnnotatorClient(CONFIG);
  // const client = new vision.ImageAnnotatorClient();
  const fileName = "public/test_img.png";
  // console.log("幹你娘", client.textDetection(fileName));
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */

  // Performs text detection on the local file
  // object | string | Buffer

  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text: string) => console.log(text));
}
