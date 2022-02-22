import React, { useState } from 'react';

// takes in 1 prop
// addTaskCallback: a callback function that adds a new task to the <TaskList />, given by <App />
export default function AddTaskForm(props) {
    // create a state variable that keeps track of the current inputted value
    const [inputtedValue, setInputtedValue] = useState("");

    // create a callback function that updates the current value in the form to the state variable above
    // add this as a callback to an onChange event to <input>
    const handleChange = (event) => {
        let newValue = event.target.value; // what the user has typed in to the form
        setInputtedValue(newValue);
    }

    // create a callback function that executes the callback function given from <App /> that will add
    // a new task to the <TaskList />
    // remeber to preventDefault and to clear the value
    // add this as a callback to an onSubmit to the <form>
    const handleSubmit = (event) => {
        event.preventDefault();

        props.addTaskCallback(inputtedValue);
        setInputtedValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-control mb-3"
                placeholder="What else do you have to do?"
                value={inputtedValue}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">Add task to list</button>
        </form>
    )
}