import express from "express";
import musicLocationsController from "../controllers/musicLocations.js";
import musicEventsController from "../controllers/musicEvents.js";

const musicLocationsRouter = express.Router();
musicLocationsRouter.get("/", musicLocationsController.getMusicEventLocations);
musicLocationsRouter.get(
  "/:locationId",
  musicLocationsController.getMusicEventLocation
);

const musicEventsRouter = express.Router();
// Define routes for music events
musicEventsRouter.get("/", musicEventsController.getMusicEvents);
musicEventsRouter.get("/:eventId", musicEventsController.getMusicEventById);
musicEventsRouter.get(
  "/location/:locationId",
  musicEventsController.getMusicEventByLocation
);

export { musicLocationsRouter, musicEventsRouter };
