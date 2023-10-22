let events = [];

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
    console.log("Task is not found")
  }
}
