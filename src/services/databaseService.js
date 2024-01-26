import * as db from "../dao/db_SQLite/database.js";

// Obtener todos los pedidos
export const getAllOrdersService = async () => {
    try {
        const orders = await db.getAllOrders();
        return orders;
    } catch (error) {
        throw error;
    }
};

// Obtener un pedido por su id
export const getOrderByIdService = async (id) => {
    try {
        const order = await db.getOrderById(id);
        return order;
    } catch (error) {
        throw error;
    }
};

// Crear un pedido
export const createOrderService = async (order) => {
    try {
        const createdOrder = await db.createOrder(order);
        return createdOrder;
    } catch (error) {
        throw error;
    }
};

// Actualizar un pedido
export const updateOrderService = async (id, order) => {
    try {
        const updatedOrder = await db.updateOrder(id, order);
        return updatedOrder;
    } catch (error) {
        throw error;
    }
};

// Eliminar un pedido
export const deleteOrderService = async (id) => {
    try {
        const deletedOrder = await db.deleteOrder(id);
        return deletedOrder;
    } catch (error) {
        throw error;
    }
};

// Obtener todos los pedidos con sus detalles
export const getAllOrdersWithDetailsService = async () => {
    try {
        const orders = await db.getAllOrdersWithDetails();
        return orders;
    } catch (error) {
        throw new Error(error);
    }
};

// Obtener todos los productos
export const getAllProductsService = async () => {
    try {
        const products = await db.getAllProducts();
        return products;
    } catch (error) {
        throw new Error(error);
    }
};

// Obtener un producto por su id
export const getProductByIdService = async (id) => {
    try {
        const product = await db.getProductById(id);
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

// Crear un producto
export const createProductService = async (product) => {
    try {
        const createdProduct = await db.createProduct(product);
        return createdProduct;
    } catch (error) {
        throw new Error(error);
    }
};

// Actualizar un producto
export const updateProductService = async (id, product) => {
    try {
        const updatedProduct = await db.updateProduct(id, product);
        return updatedProduct;
    } catch (error) {
        throw new Error(error);
    }
};

// Eliminar un producto
export const deleteProductService = async (id) => {
    try {
        const deletedProduct = await db.deleteProduct(id);
        return deletedProduct;
    } catch (error) {
        throw new Error(error);
    }
};

// Obtener todos los usuarios
export const getAllUsersService = async () => {
    try {
        const users = await db.getAllUsers();
        return users;
    } catch (error) {
        throw new Error(error);
    }
};

// Obtener un usuario por su id
export const getUserByIdService = async (id) => {
    try {
        const user = await db.getUserById(id);
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

// Crear un usuario
export const createUserService = async (user) => {
    try {
        const createdUser = await db.createUser(user);
        return createdUser;
    } catch (error) {
        throw new Error(error);
    }
};

// Actualizar un usuario
export const updateUserService = async (id, user) => {
    try {
        const updatedUser = await db.updateUser(id, user);
        return updatedUser;
    } catch (error) {
        throw new Error(error);
    }
};

// Eliminar un usuario
export const deleteUserService = async (id) => {
    try {
        const deletedUser = await db.deleteUser(id);
        return deletedUser;
    } catch (error) {
        throw new Error(error);
    }
};