import { Schema } from "mongoose";


const debitoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME de débito é obrigatório!"]
        }, 
        valor: {
            type: Number,
            required: [true, "O campo VALOR de débito é obrigatório!"],
            min: [1, "Valor minimo de R$ 1,00"]
        },
        status: {
            type: String,
            enum: ["PAGO", "AGENDADO", "PENDENTE"],
            uppercase: true
        },
    }
);

export { debitoSchema };