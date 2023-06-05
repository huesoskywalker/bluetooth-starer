import { createServer } from "https"
import { readFileSync } from "fs"
import { parse } from "url"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
    key: readFileSync("./localhost-key.pem"),
    cert: readFileSync("./localhost.pem"),
}

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(3000, "localhost", (err) => {
        if (err) {
            throw err
        }
        console.log("> Ready on https://localhost:3000")
    })
})
