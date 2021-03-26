const express = require("express");
const app = express();

//O listen deve ser a ultima linha a ser executada pois ele sobe a aplicação, deixa ela executando/escutando tudo aquilo que foi configurado para fazer, tudo o que é feito antes do listen vai ser o que a gente configura de funcionalidade, por esse motivo deve sempre ficar por ultimo 
app.listen(3000 );

//01:08:45