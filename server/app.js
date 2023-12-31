const express = require("express");
const app = express();
const fs = require("fs/promises");
const path = require("path");
require("dotenv").config();
const cron = require("node-cron");
const fileUpload = require("express-fileupload");
const CookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const chatRoutes = require("./routes/chatRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const morgan = require("morgan");

app.use(cors());
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);

app.use(
  CookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// cron job
cron.schedule("0 */12 * * *", async function () {
  let directory = "./tmp";
  const files = await fs.readdir(directory);
  if (files.length)
    for (const file of files) {
      await fs.unlink(path.join(directory, file));
    }
});

//auth routes
app.get("/", (req, res) => {
  res.json({
    message: "Finallyyyy",
  });
});

app.use("/user", userRoutes);
app.use("/prescription", prescriptionRoutes);
app.use("/doctor", doctorRoutes);
app.use("/", chatRoutes);
app.use("/booking", bookingRoutes);

module.exports = app;
