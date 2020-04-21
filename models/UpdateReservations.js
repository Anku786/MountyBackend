const db = require("../hotel.js");

const Guest = {};
Guest.update = updatedGuest => {
  const details= db.none("UPDATE guests SET firstName = ${firstName}, lastName = ${lastName}, email = ${email}, address= ${address}, city= ${city}, state= ${state}, phone= ${phone},  check_in= ${check_in}, check_out= ${check_out} WHERE guest_id = ${guest_id}", updatedGuest);
  res.send(details);
};
module.exports = Guest;