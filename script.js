document.addEventListener("DOMContentLoaded",function(){
    function main(){
        let events = [];
        // renderTodos(events); 

        document.querySelector("#submit-event").addEventListener("click", function(event){
            event.preventDefault(); // this is specificly if we are using the 'form' in HTML
            const eventDayElement = document.querySelector(".day:checked")
            const eventDay = eventDayElement.value;
            const eventTimingElement = document.querySelector(".time:checked")
            const eventTiming = eventTimingElement.value;
            const eventNameElement = document.querySelector("#eventName")
            const eventName = eventNameElement.value;

            addEvent(events, eventDay, eventTiming, eventName);
            console.log(events); 
            // renderTodos(todos); // to redraw the list of tasks
        })
    }

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

    main(); 
})

