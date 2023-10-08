// const vision = require("@google-cloud/vision");

async function extractTextFromImg(file: string): Promise<string[]> {
  // Creates a client
  const vision = require("@google-cloud/vision");
  const client = new vision.ImageAnnotatorClient(file);
  let textArr: string[] = [];
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const fileName = 'Local image file, e.g. /path/to/image.png';

  // Performs text detection on the local file
  const [result] = await client.textDetection(file);
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text: string) => {
    console.log(text);
    textArr.push(text);
  });

  return textArr;
}

export default extractTextFromImg;
