// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
})

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    var newCat = cats.slice()
    newCat.push("Broom");
    return newCat
}

function prependCat() {
    var addCat = cats.slice()
    addCat.unshift("Arnold");
    return addCat
}

function removeLastCat() {
    var deadCat = cats.slice()
    deadCat.pop()
    return deadCat
}

function removeFirstCat() {
    var runCat = cats.slice()
    runCat.shift()
    return runCat
}