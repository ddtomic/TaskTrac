//declaring variables needed
let inputTask = document.getElementById("input-box");
let inputDate = document.getElementById("input-date");
let listContainer = document.getElementById("list-container");


function addTask(){
    //getting user inputted values for task name and task date
    let taskName = inputTask.value;
    let taskDate = inputDate.value;

    //checks if taskName and task Date are inputted then adds tasks
    if (taskName && taskDate) {
        
        //creates li element and adds task name, date, and delete button
        let li = document.createElement("li");
        li.innerHTML = taskName + "<br>" + taskDate + "<p>X</p>" ;
        


        // Date turns into a data attribute
        li.setAttribute("data-task-date", taskDate);

        //appends li elements to the container, done for first element
        listContainer.appendChild(li);
    
        // Sort tasks by date
        let taskListItems = Array.from(listContainer.getElementsByTagName("li"));
        taskListItems.sort((a, b) => {
            const dateA = a.getAttribute("data-task-date");
            const dateB = b.getAttribute("data-task-date");
            return dateA.localeCompare(dateB);
        });

        // List is cleared
        listContainer.innerHTML = "";

        //The sorted tasks are appended
        taskListItems.forEach((item) => listContainer.appendChild(item));

        //clears both input fields after task is inputted for user convenience 
        inputTask.value = '';
        inputDate.value = '';

        //if date and name are not inputted then error message
    } else {
        alert("Error: you must enter a task name AND date to proceed.");
    }

}

//Marking tasks as complete
listContainer.addEventListener("click", function(value){
    // if clicked target is list element, it will mark task as complete
    if(value.target.tagName === "LI"){
        value.target.classList.toggle("checked");
    //if clicked target is the delete button the task will be deleted
    }else if(value.target.tagName === "P"){
        value.target.parentElement.remove();
    }
})

