// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Reservas Hotelera',
      version: '1.0.0',
      description: 'API para gestionar reservas de un hotel',
    },
    components: {
      schemas: {
        Reserva: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'El identificador único de la reserva' },
            hotel: { type: 'string', description: 'El nombre del hotel reservado' },
            fecha_inicio: { type: 'string', format: 'date', description: 'La fecha de inicio de la reserva' },
            fecha_fin: { type: 'string', format: 'date', description: 'La fecha de fin de la reserva' },
            tipo_habitacion: { type: 'string', description: 'El tipo de habitación reservada' },
            estado: { type: 'string', description: 'El estado de la reserva' },
            num_huespedes: { type: 'integer', description: 'El número de huéspedes para la reserva' },
          },
          required: ['id', 'hotel', 'fecha_inicio', 'fecha_fin', 'tipo_habitacion', 'estado', 'num_huespedes'],
        },
      },
    },
  },
  apis: ['./routes/reservasRoutes.js'],  // Ruta correcta a tus rutas
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;
