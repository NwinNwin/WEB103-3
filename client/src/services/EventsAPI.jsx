const baseUrl = "http://localhost:3000";
const locationMap = {
  0: "redrocks",
  1: "royalalberthall",
  2: "staplescenter",
  3: "sydneyoperahouse",
};

const getAllMusicEvents = async () => {
  try {
    const response = await fetch(`${baseUrl}/musicEvents`);
    const data = await response.json(); // Added await to properly await the promise
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getMusicEventsById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/musicEvents/current/${id}`);
    const data = await response.json();
    return data[0];
  } catch (err) {
    console.log(err);
  }
};

const getMusicEventsByLocation = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/musicEvents/${locationMap[id]}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllMusicEvents,
  getMusicEventsByLocation,
  getMusicEventsById,
};
