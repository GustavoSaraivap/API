import express from "express";
import { Request, Response } from "express"; 
const app = express();

console.clear();

//Metodos HTTP
//O protocolo http define um conjunto de métodos de requisição
//GET -> Solicita um detetrminado recurso do servidor
//POST -> Envia um recurso para o servidor 

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(3000, () =>{
    console.log("O servidor está rondando ......");
});