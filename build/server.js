"use strict";
require("dotenv").config();
const server = require("./app.ts");
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log("🔊 Listening on PORT 🔊", PORT);
});
