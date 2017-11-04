import React, { Component } from 'react';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {date: '', description: ''},
      todoList: this.props.todoList
    }
    this.inputChanged = this.inputChanged.bind(this);

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addTodo}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="text" name="date" placeholder="dd.MM.yyyy" onChange={this.inputChanged} ref="newDate" /></td>
                <td><input type="text" name="description" placeholder="Cannot be empty" onChange={this.inputChanged} ref="newDescription" /></td>
                <td><input type="submit" value="Add new todo" className="button"/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  //inputChanged handle input change when user input new todo
  inputChanged = (event) => {
    const newTodo = this.state.todo;
    newTodo[event.target.name]= event.target.value;
    this.setState({todo: newTodo});
  }

  // addTodo handle adding the new todo to current todoList
  addTodo = (event) => {
    event.preventDefault();
    let updatedTodoList = [...this.state.todoList, this.state.todo];

    this.refs.newDate.value = "";
    this.refs.newDescription.value = "";

    this.props.stateUpdate(updatedTodoList);

  }
}

export default Add;
