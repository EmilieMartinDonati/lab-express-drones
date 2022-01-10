// Iteration #1

require("../db/index.js");

const Drone = require("../models/Drone.model.js");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

(async function () {
	try {
		await Drone.deleteMany();
		const createdDrones = await Drone.create(drones);
		console.log(`Just created ${createdDrones.length}`);
		process.exit();
	} catch (err) {
		console.error(err);
		process.exit();
	}
})();