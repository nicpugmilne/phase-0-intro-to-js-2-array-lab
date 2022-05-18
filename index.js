// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
}

function appendCat(name){
    let moreCats = [...cats, name];
    console.log('original array: ' + cats);
    console.log('new array: ' + moreCats);
    return moreCats;
}

function prependCat(name){
    let evenMoreCats = [name, ...cats];
    console.log('original array: ' + cats);
    console.log('new array: ' + evenMoreCats);
    return evenMoreCats;
}

function removeLastCat(){
    console.log(cats.slice(0, cats.length - 1)); 
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    console.log(cats.slice(1));
    return cats.slice(1);
}

console.log(cats);
destructivelyAppendCat('Ralph');
destructivelyPrependCat('Bob');
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat('Broom');
prependCat('Sally');
removeLastCat();
removeFirstCat();
