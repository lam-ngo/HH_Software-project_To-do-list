import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
        <tr ref="todo">
          <td>{this.props.todo.date}</td>
          <td>{this.props.todo.description}</td>
          <td><input type="button" value="Delete" className="button" onClick={this.handleDelete} /></td>
        </tr>
    );
  }

  // when user clicks Delete button, method handleDelete passes each row id as a parameter to method deleteTodo in Table component
  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  }
}

export default Body;
