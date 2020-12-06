const list = document.querySelector('.list')
const form = document.getElementById('searchBar')
const data = document.querySelector('.database')

form.addEventListener('keyup',(e)=> {
    if (e.key == 'Enter'){
    const searchString = e.target.value; 
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${searchString}`, {
    "method": "GET",
    "headers": {
    "x-rapidapi-key": "66b989f426msh50081b8742da0acp1169d4jsn9499c182c333",
    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
}
})
.then(response=>response.json())
.then(response => {
getStats(response);
})
.catch(err => {
console.error(err);
});
    }
})

const getStats = (stat) => {
    const html = `
    <li class = "info">
    <img src="${stat.poster}" alt="Image Unavailable"></img>
    <p><b>Plot:</b> <i>${stat.plot}<i><p>
    <p><b>Runtime:</b> <i>${stat.length}<i><p>
    <p><b>Release Year:</b> <i>${stat.year}<i></p> 
    </li>`
    data.style.display = 'initial'
    list.innerHTML = html
}


