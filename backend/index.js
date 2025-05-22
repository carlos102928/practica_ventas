import cors from 'cors';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes)

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});
//Una api signfica interfaz de aplicación programada, este es un bloque de programación el cual tiene un conjunto de reglas el cual permite que nuestra aplicación acceda a la información de otras aplicaciones, ejemplo, acá estamos usando una api para obtener los datos de la base de datos.
//appi res full es la que se utilizará cuando usamos app.use, esta le permite a la api hacer los cuatro métodos principales, en donde agrega, modifica, elimina o muestra la información. 
//Permite crear aplicaciones frontend (HTML, CSS, REACT) para que se conecten con el backend. Hace posible la comunicación con diferentes sistemas (app móviles, servidor web) y es clave para el desarrollo de aplicaciones escalables y eficientes.