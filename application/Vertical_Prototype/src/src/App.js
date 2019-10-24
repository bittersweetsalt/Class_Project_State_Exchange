import React from 'react';
import request from './api';
import './App.css';
import ListItem from './ListItem';

class App extends React.Component {
    state = {
        query: "",
        queryData: []
    }

    onQuerySubmit = async (event) => {
        event.preventDefault();

        const response = await request.get('/testmysql',
        {
           query: this.state.query
        }).catch( e => console.log(e));

        this.setState({ queryData: response.data});
    }

    renderQueryList = () => {
        return this.state.queryData.map( data => {
            return <ListItem data={data} key={data.ID} />
        })
    }

    render() {
        return (
            <div className="app">
                <div className="banner">
                    <h1>CSC 648 Fall 2019 | Global Team #07</h1>
                </div>
                <h2>State Exchange</h2>
                <form onSubmit={ (e) => this.onQuerySubmit(e)}>
                    <input 
                        type="text"
                        value={this.state.query}
                        placeholder="X-box, Macbook"
                        onChange = { e => this.setState({ query: e.target.value})}
                    ></input>
                    <button type="submit">Search</button>
                </form>
                <div className="list">{this.renderQueryList()}</div>
            </div>
        );
    }   
}

export default App;