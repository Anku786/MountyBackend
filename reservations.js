const db = require("./hotel.js");

const Reservation = {};

Reservation.all = () => {
  return db.any("SELECT * FROM reservations");
};

// Reservation.find = id => {
//   return db.one("SELECT * FROM reservations WHERE reservation_id = ${id}", {
//     id: id
//   });
// };

Reservation.create = newReservation => {
  return db.one(
    "INSERT INTO reservations (room_number,  guest_id) VALUES ($1, $3) RETURNING *",
    [newReservation.room_number, newReservation.guest_id]
  );
};

Reservation.update = updatedReservation => {
  return db.none("UPDATE reservations SET room_number= ${room_number}, WHERE guest_id = ${guest_id}", updatedReservation);
};

Reservation.delete = id => {
  return db.result("DELETE FROM reservations WHERE reservation_id = ${id}", { id: id });
};

module.exports = Reservation;
