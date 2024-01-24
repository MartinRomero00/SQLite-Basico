import db from './db.js';

// Obtener todos los productos
export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM products';

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Obtener un producto por su id
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM products WHERE id_products = ?';

        db.get(sql, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                if (row) {
                    resolve(row);
                } else {
                    reject(err);
                }
            }
        });
    });
};

// Crear un producto
export const createProduct = (product) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';

        db.run(sql, [product.name, product.description, product.price, product.stock], function (err) {
            if (err) {
                reject(err);
            } else {
                const createdProduct = {
                    id: this.lastID,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock
                };
                resolve(createdProduct);
            }
        });
    });
};

// Actualizar un producto
export const updateProduct = (id, product) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id_products = ?';

        db.run(sql, [product.name, product.description, product.price, product.stock, id], function (err) {
            if (err) {
                reject(err);
            } else {
                const updatedProduct = {
                    id: id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock
                };
                resolve(updatedProduct);
            }
        });
    });
};

// Eliminar un producto
export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM products WHERE id_products = ?';

        db.run(sql, [id], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
};