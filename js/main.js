let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 20;

// Checking Runners who registered Early & Adults.
if (registeredEarly && runnersAge > 18) {
    raceNumber += 1000;
}

// Checking Runners age & registration time to determine racetime.

// For adult runners who registered early.
if (registeredEarly && runnersAge > 18) {
    console.log(`Racenumber ${raceNumber += 1000}, you will race at 9.30am.`);
// For adult runners who registered late.
} else if (!registeredEarly && runnersAge > 18) {
    console.log(`Racenumber ${raceNumber}, you will race at 11:00am.`);
// For runners younger than 18.
} else if (runnersAge < 18) {
    console.log(`Racenumber ${raceNumber}, you will race at 12.30pm.`);
// For runners who are 18 years old.
} else { 
    console.log("Please see the registration desk please!");
}

function sayThanks(name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
  }
  
  sayThanks ("Cole");
  
  