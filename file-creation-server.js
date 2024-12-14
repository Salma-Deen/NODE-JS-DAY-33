import express from "express";

import { createFile, getFiles } from "./fs-inbuilt.js";

const server = express();

//POST - Creating Files
server.post("/create-file", (req, res) => {
    const date = new Date();
    const timeStamp = date.getTime().toString();  //timestamp

    const isoDateTime = date.toISOString().replaceAll(":", "-").split(".")[0];

    createFile("./api-files", `${isoDateTime}.txt`, timeStamp, () =>
        res.status(201).json({ msg: "fourth file created successfully" })
    );
});

//GET - getting all files in api folder
server.get("/get-files", (req, res) => {

    getFiles("./api-files", (data) => res.json(data), () => res.status(500).json({ msg: "something went wrong" }))
});

const PORT = 5400;
server.listen(PORT, () => {
    console.log("server listening on", PORT);
});

