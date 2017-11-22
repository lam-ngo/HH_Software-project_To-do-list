import React, { Component } from 'react';

//import components: Table-head, Table-body
import Head from './Component_Head/Head';
import Body from './Component_Body/Body';

class Table extends Component {
  render() {
    return (
      <table>
        <Head />

        <tbody>
          {this.props.todoList.map((todo,index) =>
            <Body key={index} id={index} todo={todo} deleteTodo={this.deleteTodo} />
          )}
        </tbody>
      </table>
    );
  }

  deleteTodo = (key) => {
    this.props.todoList.splice(key, 1);
    this.props.deleteTodo(this.props.todoList);
  }
}

export default Table;
