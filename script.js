const url = 'https://fakerestapi.azurewebsites.net/api/v1/';
const headers = new Headers();
headers.append('Content-type',"application/json");

// get authors info
const getAuthors = fetch(`${url}Authors`).then(response =>{ return response.json()}).then(result => console.log('getAuthors',result));

// post new author

const options =
{
    method: 'POST',
    headers,
    body: JSON.stringify
    ({  
        "idBook" : '32',
        "firstName": "First Name 0",
        "lastName": "Last Name 0"  
    })
};
const postAuthor = fetch(`${url}Authors`,options).then(response =>{ return response.json()}).then(result => console.log('postAuthor ',result));

// get author's book ID 
const bookId = prompt("Enter Book ID");
const getSpecificBookId = fetch(`${url}Authors/authors/books/${bookId}`).then(response =>{ return response.json()}).then(result => console.log('getSpecificBookID ',result));

// get author's ID
const authorId = prompt("Enter Author ID");
const getSpecificAuthorId = fetch(`${url}Authors/${authorId}`).then(response =>{ return response.json()}).then(result => console.log('getSpecificAuthorID',result));

// put author ID (update)
const putAuthorId = prompt("Enter Author ID for Update (PUT)");
const authorFirstName = prompt("Enter Author firstName for Update (PUT)");
const authorLastName = prompt("Enter Author lastName for Update (PUT)");
const options1 =
{
    method: 'PUT',
    headers,
    body: JSON.stringify
    ({
        "firstName": `${authorFirstName}`,
        "lastName": `${authorLastName}`,  
    })
};
const putAuthor = fetch(`${url}Authors/${putAuthorId}`,options1).then(response =>{ return response.json()}).then(result => console.log('putAuthor ',result));

// Delete Author
const authorForDelete = prompt("Enter Author ID for Delete");
const options3 =
{
    method: 'DELETE',
   
};
const deleteAuthor = fetch(`${url}Authors/${authorForDelete}`,options3).then(response =>{ console.log(`Status for deleteAuthor ${authorForDelete} is `,response.status)});

// PATCH Author
const patchAuthorId = prompt("Enter Author ID for Update (PATCH)");
const patchAuthorFirstName = prompt("Enter Author firstName for Update (PATCH)");
const options2 =
{
    method: 'PATCH',
    headers,
    body: JSON.stringify
    ({
        "firstName": `${patchAuthorFirstName}`,  
    })
};
const patchAuthor = fetch(`${url}Authors/${patchAuthorId}`,options2).then(response =>{ console.log('PATCH Author in this Server is Disable (Status = ',response.status,")")});

// ///////////////////////////////////////////// Books

// Get books
const getBooks = fetch(`${url}Books`).then(response =>{ return response.json()}).then(result => console.log('getBooks',result));

//Post book
const booksOptions =
{
    method: 'POST',
    headers,
    body: JSON.stringify
    ({
        "id": 0,
        "title": "Math",
        "description": "Calculate",
        "pageCount": 6,
        "excerpt": "Talking About",
        "publishDate": "2021-06-15"
    })
};
const postBook = fetch(`${url}Books`,booksOptions).then(response =>{ return response.json()}).then(result => console.log('postBook ',result));

// get Book ID
const getBookID = fetch(`${url}Books/12`).then(response =>{ return response.json()}).then(result => console.log('getBookID ',result));

// PUT book
const bookOptions1 =
{
    method: 'PUT',
    headers,
    body: JSON.stringify
    ({
        "id": 33,
        "title": "Chemist",
        "description": "Elements",
        "pageCount": 7,
        "excerpt": "alot",
        "publishDate": "2021-08-02"
      })
};

const putBook = fetch(`${url}Books/16`,bookOptions1).then(response =>{ return response.json()}).then(result => console.log('putBook ',result));

// Delete book
const optionsBook2 =
{
    method: 'DELETE',
   
};
const deleteBook = fetch(`${url}Books/33`,optionsBook2).then(response =>{ console.log(`Status for deleteBook 33 is `,response.status)});

// PATCH book
const optinosBook3 =
{
    method: 'PATCH',
    headers,
    body: JSON.stringify
    ({
        "title": "English"  
    })
};
const patchBook = fetch(`${url}Books/14`,optinosBook3).then(response =>{ console.log('PATCH Book in this Server is Disable (Status = ',response.status,")")});