
import './App.css';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import NavBar from "./components/navBar";
import Counters from "./components/counters";


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  } */

  class App extends Component {
    state = {
      counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    };
  
    //using Arrow function for bind issue to solved
    //And passing An argument for event handler
    handleIncrement = counter => {
      //We need to update the State
      //create new array clone using Spread operator
      const counters = [...this.state.counters];
      //we need the index of the counters array
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
      //this.setState({ value: this.state.value + 1 });
    };
  
    handleDecrement = counter => {
      //We need to update the State
      //create new array clone using Spread operator
      const counters = [...this.state.counters];
      //we need the index of the counters array
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
      //console.log(product);
      //this.setState({ value: this.state.value - 1 });
    };
    //State change belong the same component
    //cannnot modified by other component
    handleDelete = id => {
      //console.log("Event Handler called", id);
      const counters = this.state.counters.filter(c => c.id !== id);
      this.setState({ counters });
    };
  
    handleReset = () => {
      const resetCounters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ resetCounters });
    };
  
    render() {
      return (
        <React.Fragment>
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main style={{ backgroundColor: "#fffdd0" }} className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onDecrement={this.handleDecrement}
            />
          </main>
        </React.Fragment>
      );
    }
  }
  
  export default App;







/*
class App extends Component {
  
  render() {
    const data = [
      {id: 1, name: 'Gob', value: '2'},
      {id: 2, name: 'Buster', value: '5'},
      {id: 3, name: 'George Michael', value: '4'}
    ];
    const columns = [{
      dataField: 'id',
      text: 'Product ID',
      style: { backgroundColor: '#00afb9' }
    }, {
      dataField: 'name',
      text: 'Product Name',
    style: { backgroundColor: '#fdfcdc' }
    }, {
      dataField: 'value',
      text: 'Product value',
      style: { backgroundColor: '#fed9b7' }
    }];
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
         
        <BootstrapTable striped
        hover
        keyField='id'
        keyField='id' data={ data } columns={ columns } />
      </div>
    );
  }
}


export default App;
*/