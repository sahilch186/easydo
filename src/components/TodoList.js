import React from 'react'
import TodoItem from './TodoItem';
import {useTodo} from '../contexts/TodoContext';

const TodoList = (props) => {

    let todoList = useTodo().todoList;

  return (
    <div className="todo-list">
        {
            todoList[0] ?
            todoList.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })
            : <h5 className="no-tasks">No Tasks</h5>
        }   
    </div>
  )
}

export default TodoList