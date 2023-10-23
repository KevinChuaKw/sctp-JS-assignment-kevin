document.addEventListener("DOMContentLoaded", function () {
    function main() {
      let events = [];
  
      document.querySelector("#submit-event").addEventListener("click", function (event) {
        event.preventDefault(); // This prevents form submission if you are using a form
  
        const eventDayElement = document.querySelector(".day:checked");
        const eventDay = eventDayElement.value;
        const eventTimingElement = document.querySelector(".time:checked");
        const eventTiming = eventTimingElement.value;
        const eventNameElement = document.querySelector("#eventName");
        const eventName = eventNameElement.value;
  
        addEvent(events, eventDay, eventTiming, eventName);
        renderEvents(events, eventDay); // Render the events for the specific day
      });
    }
  
    function renderEvents(events, eventDay) {
      const dayGroup = document.getElementById(eventDay);
      const eventListElement = document.getElementById(`${eventDay}EventList`);
      eventListElement.innerHTML = ""; 
  
      for (let event of events) {
        // Create an empty <li>
        const listItem = document.createElement('li');
  
        // Set the class of the newly created element
        listItem.className = "list-group-item";
  
        // Set its innerHTML (the content that you want to display within the li)
        console.log(events); 
        listItem.innerHTML = `${event.eventName} (timing: ${event.eventTiming}) 
        <button class="btn btn-primary btn-sm edit-btn">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        <button class="btn btn-secondary btn-sm completed-btn">Completed!</button>
        `;
  
        // In this specific <li> element, look for a button with the class `edit-btn`
        listItem.querySelector(".edit-btn").addEventListener("click", function () {
          // The anonymous function that is being created remembers what `event` was referring
          // to at the point that is being created
  
          // Ask the user for the new event name and the new timing
          const newEventName = prompt("Please enter the new event name: ", event.eventName);
          const newEventTiming = prompt("Please enter the new event Timing: ", event.eventTiming);
          modifyEvent(events, event.id, newEventName, newEventTiming);
          renderEvents(events, eventDay); // Re-render the events for that day
        });
  
        // Select the delete button that is in the li element
        listItem.querySelector(".delete-btn").addEventListener("click", function () {
          // Delete the event (you should have a deleteEvent function)
          deleteEvent(events, event.id);
          renderEvents(events, eventDay); // Re-render the events for that day
        });
  
        listItem.querySelector(".completed-btn").addEventListener("click", function () {
          // Handle the event completion logic here
        });
  
        // Append the created list item to the event list for the specific day
        eventListElement.appendChild(listItem);
      }
  
      // Append the day group element with its event list to the container
      dayGroup.appendChild(eventListElement);
    }
  
    main();
  });
  