import express, { json } from "express";
import { nanoid } from "nanoid";
import fs from "fs";
import { url } from "inspector";

const app = express();

app.use(express.json());

app.post("/shorten", (req, res) => {
    // console.log(req.body.longUrl);
    const shortUrl = (nanoid(5));

    const urls = [{
        [shortUrl]: req.body.longUrl,
    }];
    fs.writeFileSync("urls.json", json.stringyfy(urls));
    res.json({
        success: true,
        data: `https://localhost:10000/${shortUrl}`,
    });
});
app.listen(10000, () => {
    console.log("Server is up and Running");
})