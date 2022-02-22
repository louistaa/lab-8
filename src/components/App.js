import { useState } from 'react';

// takes in 1 prop:
// initialTasks: the initial set of tasks
export default function App(props) {
  // create a hook that represents the current set of tasks in the to-do list

  // create a 'addTask' function that appends a new task to the current set of tasks
  // don't forget to create a new set of tasks and update the state with it (using spread)
  // this function takes in a taskDescription representing the description of the task

  // create a 'toggleTaskCompletion' function that toggles the complete property of a task
  // this function takes in the taskID to toggle complete property of
  // don't forget to create a new set of tasks and update the state with it (using spread)

  // filter out all the tasks that are incomplete
  let incompleteArray = tasks.filter((task) => !task.complete);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <p className="lead">
        Num things I have to do: <strong>{incompleteArray.length}</strong>
      </p>
      {/* Instantiate components below */}

    </div>
  );
}