const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();

const app = express();

// Security middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "blob:"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "blob:"],
        imgSrc: ["'self'", "blob:", "data:"],
        connectSrc: ["'self'", "blob:", "data:"],
        frameSrc: ["blob:", "data:"],
        objectSrc: ["blob:", "data:"],
        formAction: ["'none'"],
      },
    },
  })
);
app.use(cors());
app.use(compression());

// Serve static files with correct MIME types
app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

// Serve JavaScript modules
app.use(
  "/js",
  express.static("src", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

// Main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`EPUB reader running on http://localhost:${PORT}`);
});
