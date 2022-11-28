/*  

28/11/2022

autor: JOAO PEDRO CARVALHO E VINICIUS DOMINGUES PEREIRA

CONEXÃO COM O MONGODB  E EXPORT DA CONEXAO

*/

const  mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/usuarios");

let db = mongoose.connection;


module.exports =  db;