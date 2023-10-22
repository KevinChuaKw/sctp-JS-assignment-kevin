let events = [];

function addTodo(todos, name, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
}

function modifyTask(todos, id, newName, newUrgency) {

  let modifiedTask = {
    "id": id,
    "name": newName,
    "urgency": newUrgency
  }

  const indexToReplace = todos.findIndex(function(t) {
    return t.id == id;
  });

  if (indexToReplace > -1) {
    todos[indexToReplace] = modifiedTask;
  }
}

function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let index = 0; index < todos.length; index++)
    if (todos[index].id == id) {
      indexToDelete = index;
      break;
    }

  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found")
  }
}
