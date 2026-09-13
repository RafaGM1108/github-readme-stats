import express from "express";
import indexHandler from "./api/index.js";
import topLangsHandler from "./api/top-langs.js";
import pinHandler from "./api/pin.js";
import wakatimeHandler from "./api/wakatime.js";
import gistHandler from "./api/gist.js";
import upHandler from "./api/status/up.js";
import patInfoHandler from "./api/status/pat-info.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", indexHandler);
app.get("/api/pin", pinHandler);
app.get("/api/top-langs", topLangsHandler);
app.get("/api/wakatime", wakatimeHandler);
app.get("/api/gist", gistHandler);
app.get("/api/status/up", upHandler);
app.get("/api/status/pat-info", patInfoHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
