// reservasController.js

const reservas = [];  // Simulamos una base de datos en memoria

// Crear una reserva
exports.crearReserva = (req, res) => {
  const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.body;
  const nuevaReserva = { id: reservas.length + 1, hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes };
  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
};

// Obtener la lista de reservas
exports.obtenerReservas = (req, res) => {
  res.status(200).json(reservas);
};

// Obtener información de una reserva específica
exports.obtenerReserva = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (reserva) {
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// Actualizar información de una reserva
exports.actualizarReserva = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (reserva) {
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.body;
    reserva.hotel = hotel || reserva.hotel;
    reserva.fecha_inicio = fecha_inicio || reserva.fecha_inicio;
    reserva.fecha_fin = fecha_fin || reserva.fecha_fin;
    reserva.tipo_habitacion = tipo_habitacion || reserva.tipo_habitacion;
    reserva.estado = estado || reserva.estado;
    reserva.num_huespedes = num_huespedes || reserva.num_huespedes;
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// Eliminar una reserva específica
exports.eliminarReserva = (req, res) => {
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index !== -1) {
    reservas.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// Filtrar reservas por hotel
exports.filtrarPorHotel = (req, res) => {
  const { hotel } = req.query;
  const reservasFiltradas = reservas.filter(r => r.hotel === hotel);
  res.status(200).json(reservasFiltradas);
};

// Filtrar reservas por rango de fechas
exports.filtrarPorFechas = (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  const reservasFiltradas = reservas.filter(r => r.fecha_inicio >= fecha_inicio && r.fecha_fin <= fecha_fin);
  res.status(200).json(reservasFiltradas);
};

// Filtrar reservas por tipo de habitación
exports.filtrarPorTipoHabitacion = (req, res) => {
  const { tipo_habitacion } = req.query;
  const reservasFiltradas = reservas.filter(r => r.tipo_habitacion === tipo_habitacion);
  res.status(200).json(reservasFiltradas);
};

// Filtrar reservas por estado
exports.filtrarPorEstado = (req, res) => {
  const { estado } = req.query;
  const reservasFiltradas = reservas.filter(r => r.estado === estado);
  res.status(200).json(reservasFiltradas);
};

// Filtrar reservas por número de huéspedes
exports.filtrarPorNumeroHuespedes = (req, res) => {
  const { num_huespedes } = req.query;
  const reservasFiltradas = reservas.filter(r => r.num_huespedes === parseInt(num_huespedes));
  res.status(200).json(reservasFiltradas);
};
