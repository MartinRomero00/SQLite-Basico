import * as db from "../services/databaseService.js";

// Obtener todos los pedidos
export const getAllOrdersController = async (req, res) => {
    try {
        const orders = await db.getAllOrdersService();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Obtener un pedido por su id
export const getOrderByIdController = async (req, res) => {
    try {
        const order = await db.getOrderByIdService(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);

    }
};

// Crear un pedido
export const createOrderController = async (req, res) => {
    try {
        const order = await db.createOrderService(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Actualizar un pedido
export const updateOrderController = async (req, res) => {
    try {
        const order = await db.updateOrderService(req.params.id, req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Eliminar un pedido
export const deleteOrderController = async (req, res) => {
    try {
        const order = await db.deleteOrderService(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Obtener todos los pedidos con sus detalles
export const getAllOrdersWithDetailsController = async (req, res) => {
    try {
        const orders = await db.getAllOrdersWithDetailsService();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Obtener todos los productos
export const getAllProductsController = async (req, res) => {
    try {
        const products = await db.getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Obtener un producto por su id
export const getProductByIdController = async (req, res) => {
    try {
        const product = await db.getProductByIdService(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Crear un producto
export const createProductController = async (req, res) => {
    try {
        const product = await db.createProductService(req.body);
        res.status(201).json({ prod: product, message: 'Producto creado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Actualizar un producto
export const updateProductController = async (req, res) => {
    try {
        const product = await db.updateProductService(req.params.id, req.body);
        res.status(200).json({ rowsAffected: product, message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Eliminar un producto
export const deleteProductController = async (req, res) => {
    try {
        const product = await db.deleteProductService(req.params.id);
        res.status(200).json({ rowsAffected: product, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Obtener todos los usuarios
export const getAllUsersController = async (req, res) => {
    try {
        const users = await db.getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Obtener un usuario por su id
export const getUserByIdController = async (req, res) => {
    try {
        const user = await db.getUserByIdService(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Crear un usuario
export const createUserController = async (req, res) => {
    try {
        const user = await db.createUserService(req.body);
        res.status(201).json({ user: user, message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Actualizar un usuario
export const updateUserController = async (req, res) => {
    try {
        const user = await db.updateUserService(req.params.id, req.body);
        res.status(200).json({ rowsAffected: user, message: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

// Eliminar un usuario
export const deleteUserController = async (req, res) => {
    try {
        const user = await db.deleteUserService(req.params.id);
        res.status(200).json({ rowsAffected: user, message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};