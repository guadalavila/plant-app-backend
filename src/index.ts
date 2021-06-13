require("dotenv").config();

import express from "express";
import { connectDb } from "./database";
import { PORT } from "./config";
import { tipRoutes } from "./routes/tipRoutes";
import bodyParser from "body-parser";
import { bannerRoutes } from "./routes";

const app = express();

const start = async () => {
    // connect to db
    await connectDb();
    app.use(bodyParser.json({ limit: "50mb" }));
    // setup routes
    app.get('/', (req, res) => res.send('Server plant App is Up! '));
    app.use("/api/tip", tipRoutes);
    app.use("/api/banners", bannerRoutes);

    app.listen(PORT, function () {
        console.log('Servidor Api Nodejs --> %d', PORT);
    });
  };
  
  start();
  


// app.get('/', (req, res) => res.send('Server up '));

// app.get('/plants', (req, res) => res.send(plants));

// app.get('/tools', (req, res) => res.send(tools));

// app.get('/artificial-plants', (req, res) => res.send(artificialPlants));

// app.get('/plants/tab', (req, res) => res.send(categoryPlants));

// app.get('/tip', (req, res) => res.send(tip));





