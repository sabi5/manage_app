var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementById("button");//first button
var incompleteTask=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasks=document.getElementById("completed-tasks");//completed-tasks

//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");
    var checkBox=document.createElement("input");//checkbx
    var label=document.createElement("label");//label
    var editInput=document.createElement("input");//text
    var editButton=document.createElement("button");//edit button
    var deleteButton=document.createElement("button");//delete button

    label.innerText=taskString;

    //Each elements, needs appending
    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText="Edit";
    editButton.className="edit btn btn-warning mx-3";
    deleteButton.innerText="Delete";
    deleteButton.className="delete btn btn-danger mx-3";

    // appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

var addTask=function(){
    console.log("Add Task");
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement(taskInput.value);
    
    //Append listItem to incompleteTask
    incompleteTask.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value="";
}

//Edit an existing task.

var editTask=function(){
    var listItem=this.parentNode;

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains("editMode");
    //If class of the parent is .editmode
    if(containsClass){

    //switch to .editmode
    //label becomes the inputs value.
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
}

//Delete task.
var deleteTask=function(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
}

//Mark task completed
var taskCompleted=function(){
    
    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete=function(){

    //Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
    incompleteTask.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

//Set the click handler to the addTask function.
addButton.onclick=addTask;
// taskInput.value="";

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
    //select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");

    //editTask to edit button.
    editButton.onclick=editTask;
    //deleteTask to delete button.
    deleteButton.onclick=deleteTask;
    //taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTask ul list items
//for each list item
for (var i=0; i<incompleteTask.children.length;i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTask.children[i],taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasks.children.length;i++){

    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasks.children[i],taskIncomplete);
}
