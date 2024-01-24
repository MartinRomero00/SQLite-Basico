import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../db/ProductsDB.js";

// Obtener todos los productos
export const getAllProductsService = async () => {
    try {
        return await getAllProducts();
    } catch (error) {
        throw new Error('Ocurrió un error al obtener los productos', error);
    }
};

// Obtener un producto por su id
export const getProductByIdService = async (id) => {
    try {
        return await getProductById(id);
    } catch (error) {
        throw new Error('Producto no encontrado', error);
    }
};

// Crear un producto
export const createProductService = async (product) => {
    try {
        return await createProduct(product);
    } catch (error) {
        throw new Error('Ocurrió un error al crear el producto', error);
    }
};

// Actualizar un producto
export const updateProductService = async (id, product) => {
    try {
        return await updateProduct(id, product);
    } catch (error) {
        throw new Error('Ocurrió un error al actualizar el producto', error);
    }
};

// Eliminar un producto
export const deleteProductService = async (id) => {
    try {
        return await deleteProduct(id);
    } catch (error) {
        throw new Error('Ocurrió un error al eliminar el producto', error);
    }
};