import { Router, Request, Response } from "express";
import { CicloController } from "../controllers/CicloController";

const router = Router();
const cicloController = new CicloController();

router.get("/", (req: Request, res: Response) => {
    res.send("<h1>Olá mundo com ts-node-dev!</h1>");
});

router.get("/ciclo/listar", cicloController.listar);

router.post("/usuario/cadastrar", cicloController.cadastrar);

router.get("/ciclo/listar", (request: Request, response: Response) => {
    
    response.json("Resposta em Json");
});

export { router };