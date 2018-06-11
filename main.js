const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

const addPlanetNames = (first, index, array) => {
    const listItem = document.createElement("li");
    listItem.textContent = `The planet of ${first} is neat`;
    planetUL.appendChild(listItem);
}


fancyPlanetArray = planets.map(function (planet){
    return planet.charAt(0).toUpperCase() + planet.slice(1);
});

ePlanets = planets.filter(planet => {
    return (planet.includes("e")) || (planet.search("E") >= 0);
});

const planetEl = document.getElementById("planets");
const planetUL = document.createElement("ul");
planetEl.appendChild(planetUL);

planets.forEach(addPlanetNames);
fancyPlanetArray.forEach(addPlanetNames);
ePlanets.forEach(addPlanetNames);

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const mySentence = words.reduce(
    (currentSentence, next) => `${currentSentence} ${next}`
)


const myParagraph = document.createElement("p");
myParagraph.textContent = mySentence;

planetEl.appendChild(myParagraph);





/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

// const mySentence = words.reduce(
//     (currentSentence, next) => `${currentSentence} ${next}`
// )

// const monthlyRainfall = [23, 32, 27, 20, 20, 31, 33, 26, 19, 12]

// // ES6+ syntax
// const totalRainfall = monthlyRainfall.reduce(
//     (currentTotal, next) => currentTotal + next
// )

// // Traditional syntax
// const totalRainfall = monthlyRainfall.reduce(
//     function (currentTotal, next) {
//         return currentTotal + next
//     }
// )