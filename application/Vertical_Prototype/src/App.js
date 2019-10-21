import React from 'react';
import axios from 'axios';
import './App.css';
import List from "./List";

class App extends React.Component {
    state = {
        query: "",
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

    //onQuerySubmit = async event => {
        //event.preventDefault();
        
        //const response = await axios.get('http://ec2-52-14-195-91.us-east-2.compute.amazonaws.com:3000/',{
         //   query: this.state.query
        //});

       // this.setState({ queryData: response});
    //}

    render() {
        return (
            <div className="app">
                <div className="banner">
                    <h1>CSC 648 Fall 2019 | Global Team #07</h1>
                </div>
                <h2>State Exchange</h2>
                <form>
                    <input 
                        type="text"
                        value={this.state.query}
                        placeholder="X-box, Macbook"
                        onChange = { e => this.setState({ query: e.target.value})}
                    ></input>
                    <button onSubmit={ e => this.onQuerySubmit(e)}>Search</button>
                </form>
                <List data = {this.state.queryData}/>
            </div>
        );
    }   
}

export default App;