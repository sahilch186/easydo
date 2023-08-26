import './App.css';
// import { useState } from 'react';
import Header from './components/Header.js';
// import Filters from './components/Filters.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import {useTodo} from './contexts/TodoContext';

function App() {

  // // Getting local todos fron Local Storage and storing in variable to store in state
  // let localTodos = JSON.parse(localStorage.getItem('easydo-todo'));
  // localTodos = localTodos ? localTodos : [];

  // // setting Local todos in state
  // const [todoList, setTodoList] = useState(localTodos);
  // const [editId, setEditId] = useState(0);

  // // Setting Updated Todos in Local Storage
  // useEffect(() => {
  //   localStorage.setItem('easydo-todo', JSON.stringify(todoList));
  // }, [todoList]);

  // let EditValue = "";

  return (
    <div className="App">
      <Header />
      {/* <Filters /> */}
      {/* Todo List Component with props to send Todos and get Updated Todos */}
      <TodoList />
      {/* Add Todo Component with props to send Todos and get list with New Todo */}
      <TodoForm editId = {useTodo().editId}  />
    </div>
  );
}

export default App;
