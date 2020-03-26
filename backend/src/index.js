const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // "./" referencia a mesma pasta do arquivo 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * rota é conjunto completo do endereço 
 * recurso é o nome do caminho depois da barra('/')
 */

/*
metodos
get: busca dados do back-end
post: cria dados pro back-end
put: altera dados do back-end
delete: deleta dados do back-end
*/

/*
tipos de parametros
query params : parâmetros nomeados(nome=valor) enviados na rota('/') apos "?"(filtros paginação) para chamar mais deve por um "&" entre eles
route params : parâmetros usados para identificar recursos(nome depois da barra)
request body : corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: SQLite
 * NoSQL: mongoDB
 */

 /**
  * driver: SELECT * FROM USER
  * Query builder: table('users').select('*').where()
  */


