import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const date = new Date();
  const today = date.getDay();

  let Day = "weekday";
  let moto = "work hard";

  if (today === 6 || today === 0) {
    Day = "Weekend...";
    moto = "Relax";
    res.json({ Day, moto });
  } else {
    res.json({ Day, moto });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
