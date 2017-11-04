import React, { Component } from 'react';
import './App.css';

//import components: Search, Table, Add
import Search from './Component_Search/Search';
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

        <Table todoList={this.state.todoList} stateUpdate={this.stateUpdate}/>
        <Add todoList={this.state.todoList} stateUpdate={this.stateUpdate}/>

      </div>
    );
  }

  /*
  function that receives new state and update current state.
  This function is passed to every component that has methods which will change the state
  */
  stateUpdate = (newState) => {
    this.setState({todoList: newState});
  };
}

export default App;
