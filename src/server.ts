import express from "express";
import cors from "cors";
import * as socketIo from "socket.io";
import { createServer } from "http";
import routes from "./routes";

const app = express();
const server = createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3737;

server.listen(PORT, () => console.log(`running on port ${PORT}`));