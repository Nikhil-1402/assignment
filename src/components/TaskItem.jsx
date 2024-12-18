import React from "react";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li>
      <span>{task.title} - {task.status}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
