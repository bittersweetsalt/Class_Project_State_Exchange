import React from 'react';
import axios from 'axios';
import './App.css';
import List from "./List";

class App extends React.Component {
    state = {
        query: "",
        queryData: []
    }
    componentDidMount(){
        this.getQuery();
    }

    getQuery  = _=> {
        
        fetch('http://ec2-52-14-195-91.us-east-2.compute.amazonaws.com:3001/testmysql', {mode: 'no-cors'})
        .then(response => {
            //this.setState({queryData: response})
            console.log("this.state.queryData");
        }
        )
         .then(({response}) => this.setState({query: "response.query"}))
        .catch(error => console.log(error));
    }

    showQuery = query => <div key = {query.DTitle}>{query.DCategory}</div>;

    // onQuerySubmit = async (event) => {
    //     event.preventDefault();
        
    //     const response = await axios.get('http://ec2-52-14-195-91.us-east-2.compute.amazonaws.com:3001/testmysql',
    //     {
    //         headers: {
    //             'Access-Control-Allow-Origin': 'htttp://localhost:3000'
    //         },
    //        query: this.state.query
    //     });

    //     this.setState({ queryData: response});

        
    // }

    render() {
        
    //    const{query, queryData} = this.state;
        

        return (
            <div className="app">
                <div className="banner">
                    <h1>CSC 648 Fall 2019 | Global Team #07</h1>
                </div>

                <h2>State Exchange</h2>

                <form onSubmit={ e => this.getQuery(e)}>
                    <input 
                        type="text"
                        value={this.state.query}
                        placeholder="X-box, Macbook"
                        onChange = { e => this.setState({ query: e.target.value})}
                    ></input>
                    <button type="submit">Search</button>
                </form>
                <List data = {this.state.queryData}/>
            </div>
        );
    }   
}
//<div> 
//{queryData.map(this.showQuery)}
//</div>
//<ul>
                    //{queryData.map( query => (
                        //<span key = {query.DTitle}> Title:{query.DTitle} | Item: {query.DCategory} </span>
                    //))}
                    //</ul>
export default App;