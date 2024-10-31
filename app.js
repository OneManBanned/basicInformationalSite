import express from "express"

const app = express()
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => res.sendFile("./index.html"))
app.get("/contact", (req, res) => res.sendFile("./contact.html"))
app.get("/about", (req, res) => res.sendFile("./about.html"))
app.get("/*", (req, res) => res.sendFile("./404.html"))

app.listen(PORT,  () => console.log(`listening on http://localhost:${PORT}`))
