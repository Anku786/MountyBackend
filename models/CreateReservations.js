const db = require("../hotel.js");

const Guest = {};

Guest.create = newGuest => {
 return db.one(
   "INSERT INTO guests (firstName, lastName, email, address, city, state, phone,check_in, check_out) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9) RETURNING *",
   [
     newGuest.firstName,
     newGuest.lastName,
     newGuest.email,
     newGuest.address,
     newGuest.city,
     newGuest.state,
     newGuest.phone,
     newGuest.check_in,
     newGuest.check_out
   ]
 );
 res.send(details);
};
module.exports = Guest;