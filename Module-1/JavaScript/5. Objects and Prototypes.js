function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const musicEvent = new Event("Jazz Night", "2025-09-15", 20);
console.log(Object.entries(musicEvent));
console.log("Available?", musicEvent.checkAvailability());
