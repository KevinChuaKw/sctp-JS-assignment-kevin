// // the 'DOMContentLoaded' events fires when all the 
// // HTML elements in the webpage has been created
// // We use it to define the entry point of our application

// document.addEventListener("DOMContentLoaded",function(){
//     function main(){
//         let todos = [];
//         renderTodos(todos); 

//         // attach all the event listeners here
//         document.querySelector("#submit-todo").addEventListener("click", function(event){
//             event.preventDefault(); // this is specificly if we are using the 'form' in HTML
//             const taskNameElement = document.querySelector("#taskName");
//             const taskName = taskNameElement.value;
//             const taskUrgencyElement = document.querySelector("#taskUrgency"); 
//             const taskUrgency = taskUrgencyElement.value;

//             addTodo(todos, taskName, taskUrgency); 
//             renderTodos(todos); // to redraw the list of tasks
//         })
//     }

//     function renderTodos(todos){
//         const todoListElement = document.querySelector("#todoList");
//         todoListElement.innerHTML =""; // reset the content 
//         for (let task of todos) {
//             // create an empty <li>
//             const listItem = document.createElement('li'); 

//             // set the class of the newly created element
//             listItem.className = "list-group-item"; 

//             // set its innerHTML (the content that we want to display within the li)
//             listItem.innerHTML = `${task.name} (urgency: ${task.urgency}) 
//             <button class= "btn btn-primary btn-sm edit-btn">Edit</button>
//             <button class= "btn btn-danger btn-sm delete-btn">Delete</button>
//             <button class= "btn btn-danger btn-sm delete-btn">Completed!</button>
//             `

//             // in this specific <li> element, look for a button with the class `edit-btn`
//             listItem.querySelector(".edit-btn").addEventListener("click", function(){
//                 // the annoymous function that is being created remember what `t` was referring
//                 // at the point that is being created

//                 // ask the user for the new task name and the new urgency
//                 const newTaskName = prompt("Please enter the new task name: ", task.name);
//                 const newTaskUrgency = parseInt(prompt("Please enter the new task Urgency: ", task.urgency)); 
//                 modifyTask(todos, task.id, newTaskName, newTaskUrgency);
//                 renderTodos(todos); 
//             });            

//             // select the delete button that is in the li element 
//             listItem.querySelector(".delete-btn").addEventListener("click", function(){
//                 deleteTask(todos, task.id);
//                 renderTodos(todos); 
//             })

//             todoListElement.appendChild(listItem);

//         }
//     }

//     main(); 
// })

