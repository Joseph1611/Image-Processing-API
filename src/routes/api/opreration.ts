import sharp from "sharp";
import path1 from "path";

export const resizeimage = async (
  fileName: string,
  width: number,
  height: number,
  imageUrl: string
): Promise<void> => {
  try {
    const imagePath = `${path1.resolve(
      __dirname,
      `../../../images/${fileName}.jpg`
    )}`;


    await sharp(imagePath).resize(width, height).toFile(imageUrl);

    return;
    //to alert the user and the devolper
  } catch (err) {
    console.log(err);
  }
};
