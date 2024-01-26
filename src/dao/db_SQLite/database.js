import databaseConnection from "./databaseConnection.js";
const db = databaseConnection;

// Obtener todos los pedidos
export const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM orders";

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Obtener un pedido por su id
export const getOrderById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM orders WHERE id_order = ?";

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

// Crear un pedido
export const createOrder = (order) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO orders (id_user, id_products, quantity, price) VALUES (?, ?, ?, ?)";

    db.run(
      sql,
      [order.id_user, order.id_products, order.quantity, order.price],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const createdOrder = {
            id: this.lastID,
            id_user: order.id_user,
            id_product: order.id_products,
            quantity: order.quantity,
            price: order.price,
          };
          resolve(createdOrder);
        }
      }
    );
  });
};

// Actualizar un pedido
export const updateOrder = (id, order) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE orders SET id_user = ?, id_products = ?, quantity = ?, price = ? WHERE id_order = ?";

    db.run(
      sql,
      [order.id_user, order.id_products, order.quantity, order.price, id],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const updatedOrder = {
            id: id,
            id_user: order.id_user,
            id_products: order.id_products,
            quantity: order.quantity,
            price: order.price,
          };
          resolve(updatedOrder);
        }
      }
    );
  });
};

// Eliminar un pedido
export const deleteOrder = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM orders WHERE id_order = ?";

    db.run(sql, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// // Obtener todas las ordenes con detalles
export const getAllOrdersWithDetails = () => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT orders.id_order, users.first_name, users.last_name, products.name AS product, products.price, orders.quantity, orders.price FROM orders INNER JOIN users ON orders.id_user = users.id_user INNER JOIN products ON orders.id_products = products.id_products";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};





// Obtener todos los usuarios
export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users";

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Obtener un usuario por su id
export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE id_user = ?";

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

// Crear un usuario
export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO users (name, last_name, email, country) VALUES (?, ?, ?, ?)";

    db.run(
      sql,
      [user.name, user.last_name, user.email, user.country],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const createdUser = {
            id: this.lastID,
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            country: user.country,
          };
          resolve(createdUser);
        }
      }
    );
  });
};

// Actualizar un usuario
export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE users SET name = ?, last_name = ?, email = ?, country = ? WHERE id_user = ?";

    db.run(
      sql,
      [user.name, user.last_name, user.email, user.country, id],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const updatedUser = {
            id: id,
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            country: user.country,
          };
          resolve(updatedUser);
        }
      }
    );
  });
};

// Eliminar un usuario
export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM users WHERE id_user = ?";

    db.run(sql, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Obtener todos los productos
export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM products";

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
    const sql = "SELECT * FROM products WHERE id_product = ?";

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
    const sql =
      "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)";

    db.run(
      sql,
      [product.name, product.description, product.price, product.stock],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const createdProduct = {
            id: this.lastID,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
          };
          resolve(createdProduct);
        }
      }
    );
  });
};

// Actualizar un producto
export const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id_product = ?";

    db.run(
      sql,
      [product.name, product.description, product.price, product.stock, id],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const updatedProduct = {
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
          };
          resolve(updatedProduct);
        }
      }
    );
  });
};

// Eliminar un producto
export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM products WHERE id_product = ?";

    db.run(sql, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};