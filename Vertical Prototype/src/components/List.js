import React from 'react';

const List = (props) => {

    const listItems = props.data.map( data => {
        return (
            <div className="listItem">
                <h3>Title: {data.name}</h3>
                <p>Category: {data.category}</p>
            </div>
        );
    });
    
    return <div className="list">{listItems}</div>
}

export default List;