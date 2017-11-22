import React, { Component } from 'react';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
    }
  }

  componentWillMount = () => {
    console.log(this.state.todoList);
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
<<<<<<< HEAD
              <td><input type="date" name="date" value={this.state.date} onChange={this.inputChanged} /></td>
              <td><input type="text" name="description" value={this.state.description} onChange={this.inputChanged} /></td>
              <td><input type="button" value="Add new todo" className="button" onClick={this.addTodo}/></td>
=======
              <td><input type="date" name="date" onChange={this.inputChanged} ref="newDate" /></td>
              <td><input type="text" name="description" placeholder="Cannot be empty" onChange={this.inputChanged} ref="newDescription" /></td>
              <td><input type="button" value="Add new todo" onClick={this.addTodo} className="button"/></td>
>>>>>>> 46d4cc64e820c11d4342a6cfcd9e4c04b9d0ef91
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  //inputChanged handle input change when user input new todo
  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  // addTodo handle adding the new todo to current todoList
  addTodo = () => {


<<<<<<< HEAD
=======
    if(this.state.todo.date!="" && this.state.todo.description!=""){
      this.props.stateUpdate(updatedTodoList);
    }else{
    alert("Adding fields cannot be empty!");
    }
>>>>>>> 46d4cc64e820c11d4342a6cfcd9e4c04b9d0ef91

    if(this.state.date!==""&&this.state.description!==""){
      let newTodo = {
        date: this.state.date,
        description: this.state.description,
      };
      this.props.stateUpdate(newTodo);
    }else{
      alert("Fields cannot be empty!");
    }
  }
}

export default Add;
