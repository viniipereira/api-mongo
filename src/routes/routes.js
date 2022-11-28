/*  

28/11/2022

autor: JOAO PEDRO CARVALHO E VINICIUS DOMINGUES PEREIRA

ROTAS PARA CRUD BÁSICO  USANDO OS METODOS DO CONTROLLER USUARIO PARA EFETUAR AS OPERAÇÕES
*/

const  express =  require("express");
const usuarioController = require ("../controllers/UserController.js");

const router = express.Router();



router.get('/usuarios',usuarioController.listarUsuarios);
router.post('/novoUsuario', usuarioController.cadastrarUsuario);
router.get('/usuario/:id', usuarioController.listarUsuarioPorId)
router.delete('/usuario/:id',usuarioController.excluirUsuario)
router.put('/usuario/:id',usuarioController.atualizarUsuario)

module.exports = router;