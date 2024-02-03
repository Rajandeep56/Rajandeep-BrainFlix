const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videos");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/videos", videoRoutes);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
