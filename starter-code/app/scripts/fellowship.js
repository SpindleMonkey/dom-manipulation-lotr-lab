console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

var theShire;
var rivendell;
var mordor;
var mountDoom;

var theHobbits;
var theBuddies;

var frodo;
var sam;
var gandalf;
var boromir;
var gollum;

var theFellowship;


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");

  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  var land;
  var title;
  var titleText;
  for (var i = 0; i < lands.length; i++) {
    land = document.createElement("article");
    title = document.createElement("h1");
    titleText = document.createTextNode(lands[i]);
    title.appendChild(titleText);
    land.appendChild(title);
    middleEarth.append(land);

    switch (lands[i]) {
      case "The Shire":
        theShire = land;
        break;

      case "Rivendell":
        rivendell = land;
        break;

      case "Mordor":
        mordor = land;
        break;

      default:
        console.log("something has gone horribly awry");
    }
  }

  // append middle-earth to your document body
  body.append(middleEarth);
}

makeMiddleEarth();



// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var shire = document.querySelector("article"); // could also use the global theShire, but the directions sound kind of specific ;)
  var listOfHobbits = document.createElement("ul");
  var hobbit;
  var hobbitHame;
  for (var i = 0; i < hobbits.length; i++) {
    hobbit = document.createElement("li");
    hobbit.setAttribute("class", "hobbit");
    hobbitName = document.createTextNode(hobbits[i]);
    hobbit.appendChild(hobbitName);
    listOfHobbits.appendChild(hobbit);
  }
  theHobbits = listOfHobbits;
  shire.appendChild(listOfHobbits);
}

makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement("div");
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener("click", nazgulScreech);
  frodo = document.querySelector(".hobbit");
  frodo.append(theRing);
}

keepItSecretKeepItSafe();



// Part 4

function makeBuddies() {
  // create an aside tag
  var myAside = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement("ul");
  var buddy;
  var buddyName;
  for (var i = 0; i < buddies.length; i++) {
    buddy = document.createElement("li");
    buddyName = document.createTextNode(buddies[i]);
    buddy.appendChild(buddyName);
    listOfBuddies.appendChild(buddy);
  }

  myAside.appendChild(listOfBuddies);
  theBuddies = listOfBuddies;

  rivendell.appendChild(myAside);
}

makeBuddies();



// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  
  for (var i = 0; i < theBuddies.childNodes.length; i++) {
    if ( theBuddies.childNodes[i].textContent === "Strider") {
      theBuddies.childNodes[i].textContent = "Aragorn";
      return;
    }
  }
}

beautifulStranger();



// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitCopy = theHobbits.cloneNode(true);

  rivendell.appendChild(hobbitCopy);
  theHobbits.parentNode.removeChild(theHobbits);
  theHobbits = hobbitCopy;
}

leaveTheShire();



// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  theFellowship = document.createElement("div");
  theFellowship.setAttribute("id", "the-fellowship");

  rivendell.appendChild(theFellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var listOfMotF = document.createElement("ul");

  // after each character is added make an alert that they have joined your party
  var fellowshipMemberCopy;
  for (var j = 0; j < theHobbits.childNodes.length; j++) {
    fellowshipMemberCopy = theHobbits.childNodes[j].cloneNode(true);
    listOfMotF.appendChild(fellowshipMemberCopy);
    switch (theHobbits.childNodes[j].textContent) {
      case "Frodo Baggins":
        frodo = fellowshipMemberCopy;
        break;

      case "Samwise \'Sam\' Gamgee":
        sam = fellowshipMemberCopy;
        break;

      default:
        break;
    }
    alert(fellowshipMemberCopy.textContent + " has joined the fellowship!");
  }

  for (var k = 0; k < theBuddies.childNodes.length; k++) {
    fellowshipMemberCopy = theBuddies.childNodes[k].cloneNode(true);
    listOfMotF.appendChild(fellowshipMemberCopy);
    switch (buddies[k]) {
      case "Gandalf the Grey":
        gandalf = fellowshipMemberCopy;
        break;

      case "Boromir":
        boromir = fellowshipMemberCopy;
        break;

      default:
        break;
    }
    alert(fellowshipMemberCopy.textContent + " has joined the fellowship!");
  }

  theFellowship.appendChild(listOfMotF);

  theHobbits.parentNode.removeChild(theHobbits);
  theHobbits = null;
  theBuddies.parentNode.removeChild(theBuddies);
  theBuddies = null;
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.textContent = "Gandalf the White";
  gandalf.style.background = "white";
  gandalf.style.border = "2px solid gray";
}

theBalrog();

//console.log(gandalf);


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("THE HORN OF GONDOR HAS BEEN BLOWN");

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  boromir.style.textDecoration = "line-through"; 
  console.log(boromir);

  // Remove Boromir from the Fellowship
  //alert("Boromir has beenkilled by the Uruk-hai!");
  boromir.parentNode.removeChild(boromir);
  boromir = null;
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);

  var peopleAtMountDoom = document.createElement("ul");

  var shadowHobbit = frodo.cloneNode(true);
  peopleAtMountDoom.appendChild(shadowHobbit);
  frodo.parentNode.removeChild(frodo);
  frodo = shadowHobbit;

  shadowHobbit = sam.cloneNode(true);
  peopleAtMountDoom.appendChild(shadowHobbit);
  sam.parentNode.removeChild(sam);
  sam = shadowHobbit;

  mountDoom.appendChild(peopleAtMountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  mordor.appendChild(gollum);
  console.log(mordor);

  // UNCLE!!!!!!!

  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
