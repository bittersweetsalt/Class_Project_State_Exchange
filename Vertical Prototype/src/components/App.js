import './App.css';
import React from 'react';
import List from "./List";

class App extends React.Component {
    state = {
        queryData: [
            {
                name: "X-box",
                category: 7
            },
            {
                name: 'Macbook',
                category: 5
            }
        ]
    }

    render() {
        return (
            <div className="app">
                <div className="banner">
                    <h1>CSC 648 Fall 2019 | Global Team #07</h1>
                </div>
                <h2>State Exchange</h2>
                <form>
                    <input type="text" placeholder="X-box, Macbook"></input>
                    <button>Search</button>
                </form>
                <List data = {this.state.queryData}/>
            </div>
        );
    }   
}

export default App;