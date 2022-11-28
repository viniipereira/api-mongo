/*  

28/11/2022

AUTOR : JOAO PEDRO CARVALHO E VINICIUS DOMINGUES PEREIRA

CLASSE PARA CONTROLAR O USUARIO AQUI É FEITO O CRUD NO BANCO COMO INSEÇÃO , REMOÇÃO , ATUALIZAÇÃO E DELETE

UTILIZA COMO MODELO A CLASSE USUARIO QUE ESTÁ EM SRC/MODELS/USUARIO.JS

*/


const  usuarios = require("../models/Usuario.js");

class UsuarioController {

   listarUsuarios = (req, res) => {
  
    //METODO FIND BUSCA TODOS OS USUARIO NO BANCO E RETORNA EM FORMATO JSON NO CORPO DA RESPOSTA

    usuarios.find((err, usuarios) => {
      res.status(200).json(usuarios)
  })
  }

   listarUsuarioPorId = (req, res) => {
    const id = req.params.id;

    //METODO FINDBYID RETORNA UM USUARIO ESPECIFICO SENDO PASSADO O ID COMO PARAMETRO NA ROTA /USUARIO/:ID

    usuarios.findById(id, (err, usuarios) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Usuario não localizado.`})
      } else {
        res.status(200).send(usuarios);
      }
    })
  }

  //METODO PARA CADASTRAR UM USUARIO NO BANCO , SENDO PASSADO NO CORPO DA REQUISIÇÃO UM JSON NO FORMATO
  // ESPERADO
   cadastrarUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    //METODO SAVE SALVA NO BANCO O ESQUEMA COM OS DADOS PASSADOS NO CORPO  PEGANDO O JSON PELO REQ.BODY 
    // EM CASO DE ERRO RETORNA FALHA SENÃO RETORNA O DADO CADASTRADO
    usuario.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Usuario.`})
      } else {
        res.status(201).send(usuario.toJSON())
      }
    })
  }

   atualizarUsuario = (req, res) => {
    const id = req.params.id;
    
    //METODO FINDBYIDANDUPDATE PROCURA O OBJETO A SER MODIFICADO PELO ID E ATUALIZA O REGISTRO INTEIRO 
  
    usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Usuario atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

   excluirUsuario = (req, res) => {
    const id = req.params.id;
     // METODO PARA EXCLUSÃO DE USUARIO POR ID COM O METODO FINDBYIDANDDELETE
    usuarios.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Usuario removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

module.exports = new UsuarioController();