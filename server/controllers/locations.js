import { pool } from "../config/database.js";

const musicVenueMap = {
  redrocks: "Red Rocks Amphitheatre",
  royalalberthall: "Royal Albert Hall",
  sydneyoperahouse: "Sydney Opera House",
  carnegiehall: "Carnegie Hall",
};

const getMusicEventLocations = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM musiceventlocations ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMusicEventLocation = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM musiceventlocations WHERE nameid=$1";
    const locationName = req.params.locationId;
    const results = await pool.query(selectQuery, [locationName]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getMusicEventLocation,
  getMusicEventLocations,
};
