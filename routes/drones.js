const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then((dbResponse) => {
    console.log("Database response:", dbResponse);
    res.render("drones/dronesList.hbs", {
      drones : dbResponse,
    });
  })
  .catch((e) => console.error(e));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
  .then((newDrone) => {
    console.log("Newdrone : ", newDrone);
    res.redirect("/drones");
  })
  .catch((e) => console.error(e));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  Drone.findById(id)
			.then((drone) => {
				console.log(drone);
				// res.send("To be continued...");
				res.render("drones/update-form.hbs", {
					drone: drone,
				});
			})
			.catch((e) => console.error(e));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
	Drone.findByIdAndUpdate(id, req.body, { new: true })
		.then((updatedDrone) => {
			console.log(updatedDrone);
			res.redirect("/drones/" + id);
		})
		.catch((e) => console.error(e));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
	try {
		const count = await Drone.findByIdAndDelete(id);
		console.log("count: ", count);
		res.redirect("/drones");
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
