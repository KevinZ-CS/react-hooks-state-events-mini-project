import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {



const taskList = tasks.map((task) => {
  return (
    <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask} />
    //Map is rendering the entire Task component multiple times for each element in the array. 
  )
})


  return (
    <div className="tasks">
      {taskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
