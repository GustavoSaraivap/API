import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("<h1>Olá mundo com ts-node-dev!</h1>");
});

router.get("/ciclo/listar/:param1/:param2", (request: Request, response: Response) => {
    const { param1, param2 } = request.params;
    const objeto = {
        atribString : "Uma string qualquer",
        atribNumero : 123.54,
        atribLogico : false,
        atribObjeto : {
            atribVetor : ["Opcao 1", "Opcao 2"]
        }
    };
    response.json(objeto);
});

router.get("/ciclo/listar", (request: Request, response: Response) => {
    
    response.json("Resposta em Json");
});

router.post("/usuario/cadastrar", (request: Request, response: Response) => {
    const obj = request.body;
    response.json(obj);
});

export { router };