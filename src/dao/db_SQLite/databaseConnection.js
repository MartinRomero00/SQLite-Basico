import  sqlite3  from "sqlite3";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Obtener la ruta absoluta del archivo de base de datos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = resolve(__dirname, "./database.db");

// Crea conexión a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

// Exportar la base de datos para usarla en otros archivos
export default db;