import { Router } from 'express';
import * as db from '../controllers/databaseController.js';

const databaseRouter = Router();

// Obtener todos los pedidos
databaseRouter.get('/pedidos', db.getAllOrdersController);

// Obtener un pedido por su id
databaseRouter.get('/pedidos/:id', db.getOrderByIdController);

// Crear un pedido
databaseRouter.post('/pedidos', db.createOrderController);

// Actualizar un pedido
databaseRouter.put('/pedidos/:id', db.updateOrderController);

// Eliminar un pedido
databaseRouter.delete('/pedidos/:id', db.deleteOrderController);

// Obtener todos los pedidos con sus detalles
databaseRouter.get('/detalles', db.getAllOrdersWithDetailsController);

// Obtener todos los productos
databaseRouter.get('/productos', db.getAllProductsController);

// Obtener un producto por su id
databaseRouter.get('/productos/:id', db.getProductByIdController);

// Crear un producto
databaseRouter.post('/productos', db.createProductController);

// Actualizar un producto
databaseRouter.put('/productos/:id', db.updateProductController);

// Eliminar un producto
databaseRouter.delete('/productos/:id', db.deleteProductController);

// Obtener todos los usuarios
databaseRouter.get('/usuarios', db.getAllUsersController);

// Obtener un usuario por su id
databaseRouter.get('/usuarios/:id', db.getUserByIdController);

// Crear un usuario
databaseRouter.post('/usuarios', db.createUserController);

// Actualizar un usuario
databaseRouter.put('/usuarios/:id', db.updateUserController);

// Eliminar un usuario
databaseRouter.delete('/usuarios/:id', db.deleteUserController);


export default databaseRouter;