import { Router } from "express";
import { getAllProductsController, getProductByIdController, createProductController, updateProductController, deleteProductController } from "../controllers/productsController.js";

const productRouter = Router();

// Obtener todos los productos
productRouter.get('/', getAllProductsController);

// Obtener un producto por su id
productRouter.get('/:id', getProductByIdController);

// Crear un producto
productRouter.post('/', createProductController);

// Actualizar un producto
productRouter.put('/:id', updateProductController);

// Eliminar un producto
productRouter.delete('/:id', deleteProductController);


export default productRouter;