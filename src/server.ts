// require("dotenv").config();
const server = require("./app")

const PORT: number = 3001;
// const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`🔊 Listening on http://localhost:${PORT}`)
})