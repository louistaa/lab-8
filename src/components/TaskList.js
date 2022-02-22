import React from 'react';

// takes in 2 props:
// task: a task object containing 3 properties: id, description, complete
// clickCallback: a function that toggles a task's complete property, given from <TaskList />
function Task(props) {
    // define a wrapping callback method here to execute the callback function given from props
    // add this an onClick to the <li>
    const handleClick = () => {
        props.clickCallback(props.task.id);
    }

    let className = '';
    if (props.task.complete) { // if task is completed, add a strike styling
        className = 'font-strike';
    }

    return (
        <li className={className} onClick={handleClick} >
            {props.task.description}
        </li>
    )
}

// takes in 2 props:
// tasks: an array of task objects
// whatToDoWhenClicked: a callback function that toggles a task's complete property, given from <App />
export default function TaskList(props) {
    // define a map() function that creates a list of <Task /> elements
    // save that in a variable then render the list using an inline expression
    let taskComponents = props.tasks.map((eachTask) => {
        return <Task key={eachTask.id} task={eachTask} clickCallback={props.whatToDoWhenClicked} />
    })
    return (
            <ol>
                {taskComponents}
            </ol>
        )
    }