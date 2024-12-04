
const express = require("express")
const os = require("os")
let app = express();


app.use(express.json())

app.get("/", (req, res) => {

    res.header({ "access-control-allow-origin": "*" })
    return res.status(200).json({ hostname: os.hostname() })

})
app.all("*", (req, res) => {
    res.header({ "access-control-allow-origin": "*" })
    return res.status(400).json({ error: "Page not found" })

})
app.listen("5000", () => {
    console.log("server listenimg port is 5000....")
})