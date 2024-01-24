import { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from "../services/productsService.js";

// Obtener todos los productos
export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un producto por su id
export const getProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdService(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un producto
export const createProductController = async (req, res) => {
    try {
        const product = req.body;
        const newProductId = await createProductService(product);
        res.status(201).json({ prod: newProductId, message: 'Producto creado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un producto
export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updatedProducts = await updateProductService(id, product);
        res.status(200).json({ rowsAffected: updatedProducts, message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un producto
export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProducts = await deleteProductService(id);
        res.status(200).json({ rowsAffected: deletedProducts, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};