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
                <div className="banner"></div>
                <h1>State Exchange</h1>
                <form>
                    <input type="text" placeholder="X-box, Macbook"></input>
                    <button>Search</button>
                </form>
                <div className="list">
                    <List data = {this.state.queryData}/>
                </div>
            </div>
        );
    }   
}

export default App;