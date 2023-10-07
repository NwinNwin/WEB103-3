import { pool } from "./database.js";

const createMusicEventsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS musicevents;
  
      CREATE TABLE IF NOT EXISTS musicevents (
          id SERIAL PRIMARY KEY,
          artist TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          countdown TEXT NOT NULL,
          location TEXT NOT NULL,
          image TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 musicevents table created successfully");
  } catch (err) {
    console.error("⚠️ error creating musicevents table", err);
  }
};

const createLocationsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS locations;
  
      CREATE TABLE IF NOT EXISTS locations (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          address TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 locations table created successfully");
  } catch (err) {
    console.error("⚠️ error creating locations table", err);
  }
};

export { createMusicEventsTable, createLocationsTable };
