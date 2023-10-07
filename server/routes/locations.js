import express from "express";
import musicEventsController from "../controllers/musicEvents.js";

const musicEventsRouter = express.Router();

musicEventsRouter.get("/", musicEventsController.getMusicEvents);
musicEventsRouter.get(
  "/:locationId",
  musicEventsController.getMusicEventByLocation
);
musicEventsRouter.get("/current/:id", musicEventsController.getMusicEventById);

export default musicEventsRouter;
