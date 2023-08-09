const express = require("express");
const petsRoutes = require("./routes/pets");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/pets", petsRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
