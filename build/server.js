"use strict";
const server = require("./app");
require("dotenv").config();
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`🔊 Listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map