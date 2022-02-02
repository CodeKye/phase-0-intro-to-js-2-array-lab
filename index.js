// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat() {
    var newCat = cats.slice()
    newCat.push("Broom");
    return newCat
}
function prependCat() {
    var strongCat = cats.slice()
    strongCat.unshift("Arnold");
    return strongCat
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