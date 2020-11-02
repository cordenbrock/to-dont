// business logic for dont do list

function DontDoList() {
  this.dontDoItems = [];
  this.currentId = 0;
};

DontDoList.prototype.addDontDoItem = function(dontDoItem) {
  dontDoItem.id = this.assignId();
  this.dontDoItems.push(dontDoItem);
}

DontDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

DontDoList.prototype.findDontDoItem = function(id) {
  for (let i=0; i< this.dontDoItems.length; i++) {
    if (this.dontDoItems[i]) {
      if (this.dontDoItems[i].id == id) {
        return this.dontDoItems[i];
      }
    }
  };
  return false;
}


// Business logic for anti-task
function dontDoItem(antiTask, antiReason) {
  this.antiTask = antiTask;
  this.antiReason = antiReason;
};


    
// UI logic
let dontDoList = new DontDoList();

function displayDontDoItemDetails(dontDoListToDisplay) {
  let dontDoList = $("#dont-do-list");
  let htmlForDontDoInfo = "";
  dontDoListToDisplay.dontDoItems.forEach(item => {
    htmlForDontDoInfo += `<li id="${item.id}"> ${item.antiTask} <em>because...</em> ${item.antiReason}</li>`
  });
  dontDoList.html(htmlForDontDoInfo);
};

function showDontDoItem(dontDoId) {
  const dontDoItem = dontDoList.findDontDoItem(dontDoId);
  $("#final-list").show();
  $(".anti-task").html(dontDoItem.antiTask);
  $(".anti-reason").html(dontDoItem.antiReason);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id='" + contact.id + "'>Delete</button>");
};

$(document).ready(function() {
  $("#dont-form").submit(function(event) {
    event.preventDefault();
    let prohibitedAction = $("#prohibited-action").val();
    let prohibitedReason = $("#prohibited-reason").val();
    console.log(prohibitedAction, prohibitedReason);
    let newDontDoItem = new dontDoItem(prohibitedAction, prohibitedReason);
    dontDoList.addDontDoItem(newDontDoItem);
    displayDontDoItemDetails(dontDoList);
  });
});
