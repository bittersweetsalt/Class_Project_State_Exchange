import React from 'react';

const List = (props) => {

    const listItems = props.data.map( data => {
        return (
            <div>
                <h2>{data.name}</h2>
                <p>{data.category}</p>
            </div>
        );
    });
    
    return <div className="list">{listItems}</div>
}

export default List;