require("dotenv").config();

import express from "express";
import { connectDb } from "./database";
import { PORT } from "./config";
import bodyParser from "body-parser";
import { bannerRoutes, plantRoutes, tipRoutes } from "./routes";

const app = express();

const start = async () => {
    // connect to db
    await connectDb();
    app.use(bodyParser.json({ limit: "50mb" }));
    
    app.get('/', (req, res) => res.send('Server plant App is Up! '));
    app.use("/api/tip", tipRoutes);
    app.use("/api/banners", bannerRoutes);
    app.use("/api/plants", plantRoutes);

    app.listen(PORT, function () {
        console.log('Servidor Api Nodejs --> %d', PORT);
    });
  };
  
  start();
  





