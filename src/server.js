import express from 'express';
import morgan from 'morgan';
import mainRouter from './routes/index.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', mainRouter);


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor API iniciado en http://localhost:${port}`);
});
