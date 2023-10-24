const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3";
const BIN_ID = "6537fb920574da7622bd212d";
const MASTER_KEY="$2a$10$MwbCjhDZkgj8pfP64d1CKONqFAPDJeiHa0nZEcJrcvVpklRDjrug6"; 

let events = [];

async function loadEvents(events){
  const eventResponse = await axios.get(`${BASE_JSON_BIN_URL}/b/${BIN_ID}/latest`);
  console.log(eventResponse.data);
  return response.data.record; 
}

async function saveEvents(events, eventDay){
  const response = await axios.put(`${BASE_JSON_BIN_URL}/b/${BIN_ID}`, events, {
    "content-type":"application/json",
    "X-Master-Key": MASTER_KEY
  })
}

function addEvent(events, day, timing, name) {
  let newEvent = {
    id: Math.floor(Math.random() * 100 + 1),
    day: day,
    timing: timing,
    name: name
  };
  events.push(newEvent);
  return events;
}

function modifyEvent(events, id, newDay, newTiming, newName) {

  let modifiedEvent = {
    "id": id,
    "day": newDay, 
    "timing": newTiming,
    "name": newName,
  }

  const indexToReplace = events.findIndex(function(e) {
    return e.id == id;
  });

  if (indexToReplace > -1) {
    events[indexToReplace] = modifiedEvent;
  }
}

function deleteEvent(events, id) {
  let indexToDelete = null;
  for (let index = 0; index < events.length; index++)
    if (events[index].id == id) {
      indexToDelete = index;
      break;
    }

  if (indexToDelete !== null) {
    events.splice(indexToDelete, 1);
  } else {
    console.log("Event is not found")
  }
}
