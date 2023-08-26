import React, {createContext, useContext, useEffect, useState} from 'react';

export const Todo = createContext(null);
export const EditTodo = createContext(null);

export const useTodo = () => {
    const todo = useContext(Todo);
    return todo;
}


export const TodoProvider = (props) => {
    const localTodos = localStorage.getItem('easydo-todo') ? JSON.parse(localStorage.getItem('easydo-todo')) : [];
    const [todoList, setTodoList] = useState(localTodos);
    const [editItem, setEditItem] = useState({id: 0});
    useEffect(() => {
        localStorage.setItem('easydo-todo', JSON.stringify(todoList));
      }, [todoList]);

    return (
        <Todo.Provider value={{todoList, setTodoList, editItem, setEditItem}}>{props.children}</Todo.Provider>
    )
}
