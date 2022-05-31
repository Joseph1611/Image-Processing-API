/* eslint-disable no-inner-declarations */
import express from "express";

const routes = express.Router();

import photos from "./api/util";

routes.use("/photos", photos);

export default routes;
