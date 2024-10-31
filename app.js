import { fileURLToPath } from "url"
import { dirname } from "path"
import express from "express"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 8000

const options = {root: __dirname}

app.get("/", (req, res) => res.sendFile("index.html", options))
app.get("/contact", (req, res) => res.sendFile("contact.html", options))
app.get("/about", (req, res) => res.sendFile("about.html", options))
app.get("/*", (req, res) => res.sendFile("404.html", options))

app.listen(PORT,  () => console.log(`listening on http://localhost:${PORT}`))
