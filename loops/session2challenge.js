let films = [
    "Matrix",
    "Sin CIty",
    "Memento",
    "Pulp Fiction"
];
const filmCheck = (film) => {

    if(film == "Memento"){
    console.log("True")
} 
else{
    console.log("False");
    }
}

for(let filmsIndex = 0; filmsIndex <films.length; filmsIndex++) {
    console.log(films[filmsIndex]);
    filmCheck(films[filmsIndex]);
}