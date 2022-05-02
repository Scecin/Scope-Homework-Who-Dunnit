// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
// return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict); // The function print "Miss Scarlet"

// I need to use a let becuase in the function changeMurderer I want to change the value of .
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict); // The function print an error

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`; 
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); // Function print "First Verdict: The murder is Mrs. Peacock"

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict); // Function print "Second Verdict: The murder is Professor Plum"

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects); // The function print The suspects are 'Miss Scarlet', 'Professor Plum', 'Colonel Mustard'
// console.log(`Suspect three is ${suspectThree}.`); //The function print `Suspect three is Mrs. Peacock

// I can't use the name scenario again because its a cont.
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict); // The function print The weapon is the Revolver

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }

//      plotTwist(); // Mrs. White
// }
// //   The value of murderer is 
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`; // Mrs. White
// }

// changeMurderer(); // Mr. Green
// const verdict = declareMurderer();
// console.log(verdict);// Mrs. White because plotTwist () is inside the chege murderer (), so muerdere is equal  Mrs. White.

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function() {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome(); // Miss Scarlet
//     }

//     plotTwist(); // // Miss Scarlet
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;  // Professor Plumm
// }

// changeMurderer();// Mr. Green
// const verdict = declareMurderer(); // Mr.green
// console.log(verdict);// The function print The murderer is Mr.green, because the murnder inside the plotTwist is a new local variable diferent to de the global variable.

// const scenario = {
//     murderer: 'Mrs. Peacock', // Mrs. Peacock
//     room: 'Conservatory', // Dining Room
//     weapon: 'Lead Pipe' // Candle Stic
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function(murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict); // The weapon is Candle Stic

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() { // Professor Plum
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);// Professor Plum

const scenario = {
    murderer: 'Professor Plum',
    room: 'Hall',
    weapon: 'Rope'
};
const declareMurderer = function() {

    const witnessOpinion = function() {
        scenario.room === 'Kitchen'

        const detectiveOpinion = function(room) {
            if (scenario.room === room) {
                scenario.murderer = Mrs. White
            } else if (room === 'Garden'){
                scenario.murderer = 'Colonel Mustard'
            } else {
                scenario.weapon = 'Rope'
            }
        }
        detectiveOpinion('Garden')
    }
    witnessOpinion()

    return `The murderer is ${scenario.murderer}.`;
}

const declareWeapon = function() {
    if (scenario.murderer === 'Colonel Mustard') {
        scenario.weapon = "Revolver"
    } else {
        scenario.weapon = "Rope"
    }
    return `The weapon is ${scenario.weapon}.`;
}

const verdictMurderer = declareMurderer();
const verdictWeapon = declareWeapon();
console.log(verdictMurderer, verdictWeapon);


