/* eslint-disable consistent-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import './App.css';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar';
import About from './components/About';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoItem from './components/TodoItem';

const App = () => {
  const [task, setState] = useState({
    todos: [],
    title: ' ',
    editingId: 0,
  });

  useEffect(() => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    setState((prevState) => ({
      ...prevState,
      todos: loadedTodos || [],
    }));
  }, [setState]);

  useEffect(() => {
    const temp = JSON.stringify(task.todos);
    localStorage.setItem('todos', temp);
  }, [task.todos]);

  useEffect(
    () => () => {
      console.log('Cleaning up...');
    },
    [],
  );

  const handleOnchange = (id) => {
    const updateCheck = task.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    setState((prevState) => ({
      ...prevState,
      todos: updateCheck,
    }));
  };

  const handleDeleteList = (id) => {
    const updateDeleted = task.todos.filter((item) => {
      if (item.id !== id) {
        return item;
      }
      return 0;
    });
    setState({
      todos: updateDeleted.map((item) => item),
    });
  };

  const handleTextChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleSubmit = (e, todo) => {
    e.preventDefault();

    if (task.title.trim()) {
      setState((prevState) => ({
        ...prevState,
        title: '',
      }));

      const newTodo = {
        id: uuidv4(),
        title: todo.title,
        completed: false,
      };

      setState((prevState) => ({
        ...prevState,
        todos: [...task.todos, newTodo],
      }));
    }
  };

  const handleDoubleClick = (idTag) => {
    setState((prevState) => ({
      ...prevState,
      editingId: idTag,
    }));
  };

  const handleSetupUpdate = (updateTitle, id) => {
    setState((prevState) => ({
      ...prevState,
      todos: task.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      }),
    }));
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setState((prevState) => ({
        ...prevState,
        editingId: 0,
      }));
    }
  };

  return (
    <Router>
      <div className="TodoContainer">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <div className="main-content">
                <Header />
                <InputTodo
                  title={task.title}
                  textChange={handleTextChange}
                  submit={handleSubmit}
                />
                <TodoItem
                  value={task.todos}
                  idTag={task.editingId}
                  change={handleOnchange}
                  deleted={handleDeleteList}
                  Click={handleDoubleClick}
                  setUpdate={handleSetupUpdate}
                  keyDone={handleUpdateDone}
                />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
