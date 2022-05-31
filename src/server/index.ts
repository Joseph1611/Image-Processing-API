import routes from "../routes/files";
import express from "express";
const app = express();
const port = 4000;

app.listen(port, message);
function message() {
  console.log(`conected at ${port}`);
}
app.use("/api", routes);

export default app;
