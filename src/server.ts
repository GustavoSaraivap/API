import express, { Router } from "express";
import { Request, Response } from "express"; 
import { router } from "./config/routes";
const app = express();

console.clear();

//configuração
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("O servidor está rondando ......");
});