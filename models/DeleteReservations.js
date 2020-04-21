const db = require("../hotel.js");

const Guest = {};
Guest.delete = id => {
  const details= db.result("DELETE FROM guests WHERE guest_id = ${id}", { id: id });
  res.send(details);
}
module.exports = Guest;