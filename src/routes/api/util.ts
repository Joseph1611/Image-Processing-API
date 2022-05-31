import express, { Response, Request } from "express";
import fs from "fs";
const photos = express.Router();
import path1 from "path";

import { resizeimage } from "./opreration";

photos.get("/", async (req: Request, res: Response): Promise<void> => {
  const fileName = req.query.filename as unknown as string;
  const  height = parseInt(req.query.height as unknown as string);
  const width = parseInt(req.query.width as unknown as string);
  const cheak= `${path1.resolve(
    __dirname,
    `../../../images/${fileName}.jpg`
  )}`;
  //here cheeking  the value if the  inputs have value
  if (!fileName) {
   
    res.send("Image name please ");
  }
  else if(!fs.existsSync(cheak)) {
    res.send("enter the correct name please"); 
  }
  else if (!width) {
    res.send("enter the width please");
  } else if (! height) {
    res.send("Hight if the image please ");
    //check if the image exisits in resized folder
  } else {
    //traying:  //const path =`${path1.resolve(`../../images/${fileName}.jpg`)}`;
    //traying:  //const path =`${path1.resolve(`../../images/${fileName}.jpg`)}`;

    const imageUrl = `${path1.resolve(
      __dirname,
      `../../../resized/${fileName}-${width}-${ height}.jpg`
    )}`;
   
    if (!fs.existsSync(imageUrl)) {
      // resize the image if the condition ===true
      // eslint-disable-next-line no-inner-declarations

      await resizeimage(fileName, height, width, imageUrl);

      try {
        res.sendFile(imageUrl);
      } catch (err) {
        console.log(err);
      }
    } else {
      if (fs.existsSync(imageUrl)) {
        res.sendFile(imageUrl);
      }
    }
  }
});

export default photos;
