// server.js

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const reservasRoutes = require('./routes/reservasRoutes');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/reservas', reservasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
