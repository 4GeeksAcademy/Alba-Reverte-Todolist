import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToDoList = () => {
	const [list, setList] = useState([]);
	const [newTask, setNewTask] = useState("");


	const handleChange = (event) => {
		// event.target.value  tiene el valor del input
		console.log(newTask);

		setNewTask(event.target.value)

	};

	const addTask = () => {
		const objTask = {
			id: uuidv4(),
			task: newTask
		};
		setList(prevState => [...prevState, objTask])
		setNewTask("")
	};

	const pressEnter = (event) => {
		if (event.key === "Enter") {
			addTask();
		}
	}


	const handleDelete = (id) => {
		const newList = list.filter(todo => todo.id !== id);
		setList(newList);
	};


	const pendingTasks = list.filter((todo) => !todo.completed).length;


	return (
		<div className="container">
			<h1 className="box d-flex justify-content-center">Mi Lista de Tareas</h1>
			<div className="box1 d-flex justify-content-center m-3">
				<input
					value={newTask}
					type="text"
					onChange={handleChange}
					onKeyDown={pressEnter}
				/>
			</div>
			<div className="pizarra d-flex">
				<ul className="mt-1" style={{ width: "100%" }}>
					{list.map(task => (
						<div className="row"><li className="col-9" key={task.id}>{task.task}</li>
							<button className="delete-button   col-2" onClick={() => handleDelete(task.id)}><i class="fa-solid fa-trash delete-icon"></i></button>
						</div>))
					}
				</ul>
				<div>
					<footer className="foot">
						Tareas pendientes: {pendingTasks}
					</footer>
				</div>
			</div>
		 </div>
	);
};
