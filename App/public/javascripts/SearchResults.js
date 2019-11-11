// const searchQueryForm = document.getElementsByClassName("search-query-form")[0];
// const databaseURL = 'http://ec2-18-224-39-11.us-east-2.compute.amazonaws.com:3001/testmysql';

// searchQueryForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const searchQueryInput = document.getElementsByClassName("search-query-input")[0];
//     submitQuery(searchQueryInput.value);
// })

// const submitQuery = async (query) => {
//     const response = await fetch(databaseURL, params = {query: query});
//     const myJson = await response.json();

//     myJson.map( res => {
//         renderListItems(res);
//     })
// }

const renderListItems = (res) => {
    const list = document.getElementsByClassName("list")[0];

    //create list-item
    const newDiv = document.createElement('div');
    newDiv.classList.add("list-item");

    //create img element with src
    const img = document.createElement('img');
    img.src = "query";

    //create list-item-data-container
    const listItemDataContainer = document.createElement('div');
    listItemDataContainer.classList.add("list-item-data-container");

    //create list-item-header
    const listItemHeader = document.createElement('div');
    listItemHeader.classList.add('list-item-header');

    const header = document.createElement('h3');
    const nameNode = document.createTextNode(res.Name);
    header.appendChild(nameNode);

    const paragraph = document.createElement('p');
    const priceNode = document.createTextNode("$" + res.Price);
    paragraph.appendChild(priceNode);

    listItemHeader.appendChild(header);
    listItemHeader.appendChild(paragraph);

    //create list-item-body
    const listItemBody = document.createElement('div');
    listItemBody.classList.add('list-item-body');

    const comment = document.createElement('p');
    const commentNode = document.createTextNode(res.Comment);
    comment.appendChild(commentNode);

    const category = document.createElement('p');
    const categoryNode = document.createTextNode(res.Category);
    category.appendChild(categoryNode);

    listItemBody.appendChild(comment);
    listItemBody.appendChild(category);

    //compose new divs and append into document
    newDiv.appendChild(img);

    listItemDataContainer.appendChild(listItemHeader);
    listItemDataContainer.appendChild(listItemBody);

    newDiv.appendChild(listItemDataContainer);
    list.appendChild(newDiv);
}