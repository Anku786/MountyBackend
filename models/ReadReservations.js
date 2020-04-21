const db = require("../hotel.js");

const Guest = {};
Guest.all = () => {
  const details= db.any("SELECT * FROM guests");
  res.send(details);
};
module.exports = Guest;