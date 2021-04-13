//Get reference point for appending elements
const mainContainer = document.querySelector(".tennis-match-counter-main");

//Create containers
let mainDiv = document.createElement("div");
let divImgSection = document.createElement("section");
let divTextSection = document.createElement("section");
let textSectionDiv1 = document.createElement("div");
let textSectionDiv2 = document.createElement("div");

//Create the elements which will go into the containers
let img = document.createElement("img");
let instructionParagraph = document.createElement("p");
let matchCountSelector = document.createElement("select");
let player1IncreasePoints = document.createElement("button");
let player2IncreasePoints = document.createElement("button");
let resetScore = document.createElement("button");

//Define elements
let imgAdress = '';
img.src = `${imgAdress}`;
img.alt = "Image of 2 table tennis rackets";

mainContainer.appendChild(mainSection);