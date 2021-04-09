import { Request, Response } from "express";

class CicloController{

    listar(request: Request, response: Response){
        const objeto = {
            atribString : "Uma string qualquer",
            atribNumero : 123.54,
            atribLogico : false,
            atribObjeto : {
                atribVetor : ["Opcao 1", "Opcao 2"]
            }
        };
        response.json(objeto);
    }

    buscarPorId(request: Request, response: Response){
        const objeto = {
            atribString : "Uma string qualquer",
            atribNumero : 123.54,
            atribLogico : false,
            atribObjeto : {
                atribVetor : ["Opcao 1", "Opcao 2"]
            }
        };
        response.json(objeto);
    }
    
    cadastrar(request: Request, response: Response){
        const obj = request.body;
        response.json(obj);
    }
}

export { CicloController }