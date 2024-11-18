// reservasRoutes.js

const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       description: Datos de la nueva reserva
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Error al crear la reserva
 */
router.post('/', reservasController.crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener la lista de reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/', reservasController.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener información de una reserva específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', reservasController.obtenerReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar información de una reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos para actualizar la reserva
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', reservasController.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Reserva eliminada
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', reservasController.eliminarReserva);

/**
 * @swagger
 * /api/reservas/filter/hotel:
 *   get:
 *     summary: Filtrar reservas por hotel
 *     parameters:
 *       - in: query
 *         name: hotel
 *         required: true
 *         description: Nombre del hotel
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/filter/hotel', reservasController.filtrarPorHotel);

/**
 * @swagger
 * /api/reservas/filter/fechas:
 *   get:
 *     summary: Filtrar reservas por rango de fechas
 *     parameters:
 *       - in: query
 *         name: fecha_inicio
 *         required: true
 *         description: Fecha de inicio
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: fecha_fin
 *         required: true
 *         description: Fecha de fin
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por fechas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/filter/fechas', reservasController.filtrarPorFechas);

// Los otros filtros se agregan de manera similar...
module.exports = router;
