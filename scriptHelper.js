// Write your helper functions here!



require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destination = document.getElementById("missionTarget");
    destination.innerHTML =`<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    };
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoLevelValidation = validateInput(cargoLevel);
    const listHeading = document.getElementById("launchStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    if (pilotValidation === "Empty" || pilotValidation === "Is a Number") {
        window.alert("Must Enter a Valid Pilot Name");
        return;
    };
    if (copilotValidation === "Empty" || copilotValidation === "Is a Number") {
        window.alert("Must Enter a Valid Co-Pilot Name");
        return;
    };
    if (fuelLevelValidation === "Empty" || fuelLevelValidation === "Not a Number") {
        window.alert("Must Enter a Valid Fuel Level Number");
        return;
    };
    if (cargoLevelValidation === "Empty" || cargoLevelValidation === "Not a Number") {
        window.alert("Must Enter a Valid Cargo Mass Number");
        return;
    };
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    let fuelNotReady;
    let cargoNotReady;
    if (fuelLevel < 10000) {
        listHeading.style.color = "red";
        listHeading.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        list.style.visibility = "visible";
        fuelNotReady = true;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        fuelNotReady = false;
    };
    if (cargoLevel > 10000) {
        listHeading.style.color = "red";
        listHeading.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        list.style.visibility = "visible";
        cargoNotReady = true;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        cargoNotReady = false;
    };
    if (!fuelNotReady && !cargoNotReady) {
        listHeading.style.color = "green";
        listHeading.innerHTML = "Shuttle is Ready for Launch";
        list.style.visibility = "visible";
    };
    

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * 6)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;