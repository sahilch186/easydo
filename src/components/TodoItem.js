import React from 'react'
// import { useState } from 'react';
import {useTodo} from '../contexts/TodoContext';


const TodoItem = (props) => {
    const todo = useTodo();
    let currentTodo = props.todo;
    // const [status, setStatus] = useState(Boolean(currentTodo.isDone));

    let changeStatus = (e) => {
        let updateList = [...todo.todoList];

        const index = updateList.findIndex(todo => {
            return todo.id === currentTodo.id;
        });
        updateList[index].isDone = !updateList[index].isDone;
        todo.setTodoList(updateList);
    }

    let deleteTodo = () => {
        let updateList = [...todo.todoList];

        const index = updateList.findIndex(todo => {
            return todo.id === currentTodo.id;
        });
        updateList.splice(index, 1);
        todo.setTodoList(updateList);
    }

    let editTodo = () => {
        let updateList = [...todo.todoList];

        const index = updateList.findIndex(todo => {
            return todo.id === currentTodo.id;
        });
        todo.setEditItem(updateList[index]);
    }

  return (
    <div className={`todo-item ${currentTodo.isDone ? "checked" : ""}`}>
        <input type="checkbox" defaultChecked={currentTodo.isDone} onChange={changeStatus} />
        <p>{currentTodo.task}</p>
        <button type="button" className="edit" onClick={editTodo}></button>
        <button type="button" className="delete" onClick={deleteTodo}></button>
    </div>
  )
}

export default TodoItem