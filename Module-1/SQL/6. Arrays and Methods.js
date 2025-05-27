let events = [];

events.push({ name: "Baking Workshop", category: "Workshop" });

const musicEvents = events.filter(e => e.category === "Music");

const eventCards = events.map(e => `Event: ${e.name}`);
console.log(eventCards);
