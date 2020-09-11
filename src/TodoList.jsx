import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: 'walk the fish' }, { task: 'groom chickens' }]
    };

    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo task={todo.task} />);
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
