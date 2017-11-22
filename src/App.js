import React, { Component } from 'react';
import './App.css';

//import components: Table, Add
import Table from './Component_Table/Table';
import Add from './Component_Add/Add';

//import default hardcoded data
import DefaultData from './Data/DefaultData';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todoList: DefaultData}
  }

  render() {
    return (
      <div>
        <div className="header"><h2>Todo List</h2></div>

        <Table todoList={this.state.todoList} deleteTodo={this.deleteTodo}/>
        <Add todoList={this.state.todoList} addTodo={this.addTodo}/>

      </div>
    );
  }

  /*
  function that receives new state and update current state.
  This function is passed to every component that has methods which will change the state
  */

 deleteTodo = (newState) => {
   // this.props.todoList.splice(key, 1);
   // this.props.stateUpdate(this.props.todoList);
   this.setState({
     todoList: newState
   });

 }

  addTodo = (newTodo) => {
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };
}

export default App;
