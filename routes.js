import { Router } from "express"; 
import usuarioController from './controller/usuarioController.js';

const router = Router();
router.get('/usuarios', usuarioController.index);



export default router;