let film = ("Pulp Fiction");
let films = ['The Matrix',' Pulp Fiction',' Kill Bill',' Sin City',' Memento ']


console.log (`${films}`);
console.log("My third favourite film is " + films[4]);
console.log("My second favourite film is " + films[3]);
console.log("My favourite film is " + films[1]);

console.log("I have " + films.length + " favourite films.");

let books = ['The Expanse',' The Hobbit',' The Lord of the Rings',' Eragon',' 1984']

console.log (`${books}`);
console.log("I have " + books.length + " favourite books. My second favourite book is " + books[4]);


let albums = [' TA1300',' Imperial',' Nostalgic64','King Of The Mischievous South',' 3001 A Laced Odyssey',' Indigoism',' 1999',' Evermore: The Art of Duality',' IGOR',' Goblin',' Project X',' Shut up and Listen',' The Wxlf Gvng Rxdxlphe'];

let favourite = [...films, ...books, ...albums];

console.log (`${favourite}`);
