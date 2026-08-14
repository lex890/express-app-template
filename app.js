const express = require("express")
const path = require("node:path");

const app = express()
const PORT = 3000
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// Initial route here
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render("500");
});

app.listen(PORT, (error) => {
  if (error) throw new error
  console.log(`app on PORT ${PORT}`)
})