/* eslint-disable consistent-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop Website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live Servver',
          completed: false,
        },
      ],
      title: ' ',
    };
  }

  handleOnchange = (id) => {
    const updateCheck = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    this.setState(updateCheck);
  };

  handleDeleteList = (id) => {
    const updateDeleted = this.state.todos.filter((item) => {
      if (item.id !== id) {
        return item;
      }
      return 0;
    });
    this.setState({
      todos: updateDeleted.map((item) => item),
    });
  };

  handleTextChange = (e) => {
    this.setState(() => ({
      title: e.target.value,
    }));
  };

  handleSubmit = (e, todo) => {
    e.preventDefault();

    if (this.state.title.trim()) {
      this.setState({ title: '' });

      const newTodo = {
        id: uuidv4(),
        title: todo.title,
        completed: false,
      };

      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    }
  };

  handleDoubleClick = () => {
    console.log('hello');
  };

  render() {
    return (
      <div className="TodoContainer">
        <NavBar />
        <div>
          <Header />
          <InputTodo
            title={this.state.title}
            textChange={this.handleTextChange}
            submit={this.handleSubmit}
          />
          <TodoItem
            value={this.state.todos}
            change={this.handleOnchange}
            deleted={this.handleDeleteList}
            Click={this.handleDoubleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
