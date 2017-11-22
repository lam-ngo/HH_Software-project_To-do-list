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
              <td><input type="date" name="date" onChange={this.inputChanged} ref="newDate" /></td>
              <td><input type="text" name="description" placeholder="Cannot be empty" onChange={this.inputChanged} ref="newDescription" /></td>
              <td><input type="button" value="Add new todo" onClick={this.addTodo} className="button"/></td>
            </tr>
          </tbody>
        </table>
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

    if(this.state.todo.date!="" && this.state.todo.description!=""){
      this.props.stateUpdate(updatedTodoList);
    }else{
    alert("Adding fields cannot be empty!");
    }

  }
}

export default Add;
