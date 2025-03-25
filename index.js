const baseUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-FTB-ET-WEB-PT/recipes'
const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts'

// Target the div root
// Make a function to render list of parties
const state = {
    allParties : []
}

const root = document.querySelector('#root');
// Add button to the top of the page to add a new party
const newParty = document.createElement('button');
newParty.innerHTML = 'Add New Event';
newParty.id = 'newParty'
console.log(root);
root.append(newParty);
const partyList = document.createElement('ol');
partyList.id = 'id = "listTitle"'
partyList.innerHTML = '<h1>Party List!</h1>';
root.append(partyList);




const render = (input) =>{
    if(Array.isArray(input)){
        input.forEach((party)=>{
            const item = document.createElement('li');
            item.classList.add("pList");
            item.innerHTML = `
            <img src = '${party.imageUrl}' alt = '${party.name}'>
            <h2>Event: ${party.name}</h2>
            <p>Description: ${party.description}</p>
            <p>Event ID: ${party.id}</p>
            <button id = 'delete'>Delete</button>
            `
partyList.append(item)

        })
    }else{
        const item = document.createElement('li');
            item.classList.add("pList");
            item.innerHTML = `
            <img src = '"https://loremflickr.com/320/240/food,ramen?q=0"' alt = '${input.name}'>
            <h2>Event: ${input.name}</h2>
            <p>Description: ${input.description}</p>
            <p>Event ID: "1782"</p>`
    }
}

// Make async functuon to call the data from the URL
const getParties= async()=>{
    try{
const res = await fetch(baseUrl);
console.log(res);
const data = await res.json();
console.log(data.data);
state.allParties = data.data;
console.log(state);
render(state.allParties);
    }catch(error){
        console.error(error)
    }
}
getParties()

document.querySelector('#newParty').addEventListener('click',()=>{
    const newEvent = prompt("Name the event you want to add:");
    const newDescription = prompt("Add a detailed description of your event:");
})

