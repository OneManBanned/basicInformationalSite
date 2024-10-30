import { fileURLToPath } from "node:url"
import { dirname } from "node:path"
import fs from "node:fs"
import http from "node:http"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 8000

const server = http.createServer(function(req, res) {
    const url = req.url

    if (url === "/" || url === "") {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res)
    } else if (url === "/about") {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.createReadStream(__dirname + "/about.html", "utf8").pipe(res)
    } else if (url === "/contact" ) {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.createReadStream(__dirname + "/contact.html", "utf8").pipe(res)
    } else {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res)
    }
    
})

server.listen(port, "localhost", () => {
    console.log(`listening on https//:localhost:${port}`)
})
