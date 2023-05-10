import * as express from "express";
const app = express();
const PORT = 3000;

app.get("/hola", (req, res) => {
  res.json({
    message: "HOLA MUNDO, DESDE EL SERVIDOR",
  });
});

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
