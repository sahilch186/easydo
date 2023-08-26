import React from 'react'
import { useState, useEffect } from 'react';
import {useTodo} from '../contexts/TodoContext';

const TodoForm = (props) => {
    const todo = useTodo();
    let TodoList = todo.todoList;
    // console.log(todo.editItem.id);

    let inputValue = todo.editItem.task ? todo.editItem.task : "";
    // console.log(todo.editItem.task);
    
    const [newTodo, setNewTodo] = useState(inputValue);

    useEffect(() => {
        setNewTodo(todo.editItem.task ? todo.editItem.task : "");
    }, [todo.editItem.task]);

    useEffect(() => {
        setNewTodo("");
        todo.setEditItem({id: 0});
    }, [todo.todoList]);
    
    // setNewTodo(todo.editItem.task ? todo.editItem.task : "");

    // let setEditValue = () => {
    //     const index = props.currentTodoList.findIndex(todo => {
    //         return todo.id === todo.editItem.id;
    //     });
    //     console.log('i', index, todo.editItem.id, TodoList[index].task);
    //     inputValue = TodoList[index].task;
        
    //     setNewTodo(inputValue);
        
    // }
    // if(todo.editItem.id !== 0){
    //     setEditValue();
    // }
    
    let changeTodo = (e) => {
        e.preventDefault();
        if(newTodo !== ""){
            if(todo.editItem.id === 0){
                let newTodoList = [{id: parseInt(Date.now() / 786000), task: newTodo, isDone: false}, ...TodoList];
                todo.setTodoList(newTodoList);
            }
            else{
                let updateList = [...TodoList];
                const index = updateList.findIndex(todoItem => {
                    return todoItem.id === todo.editItem.id;
                });
                // console.log(index);
                updateList[index].task = newTodo;
                todo.setTodoList(updateList);
            }
        }
    }
    // console.log(todo.editItem);
    return (
    <form className="todo-form" onSubmit={changeTodo}>
        <input type="text" placeholder="Enter Task" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} />
        <button type="button" className={todo.editItem.id === 0 ? "add" : "edit"} onClick={changeTodo}> {todo.editItem.id === 0 ? "Add" : "  Edit"}</button>
    </form>
  )
}

export default TodoForm