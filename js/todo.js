var main = function (toDoObjects) {
    "use strict";
    
    var toDos = toDoObjects.map(function(toDo) {
        return toDo.description;
    }); 
    $(document).ready(function() {
        $.getJSON("todos.json", function(toDoObjects) {
            main(toDoObjects);
        });
    });
}