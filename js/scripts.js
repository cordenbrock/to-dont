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

DontDoList.prototype.findAntiTask = function(id) {
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

let testTask = new dontDoItem("drink tequila", "you know why");
addDontDoItem(testTask)




    
// UI logic

$(document).ready(function() {
  $("#dont-form").submit(function(event) {
    event.preventDefault();
  });
});






