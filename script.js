/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const KEY_A = 65;
const KEY_W = 87;
const KEY_S = 83;
const KEY_D = 68;

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_RIGHT = 39;

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 1080; // x-positie van speler
var spelerY = 650; // y-positie van spelerw

var vijandX = 200;
var vijandY = 650;

var snelheidmens = 10;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(KEY_A)) {
    spelerX = spelerX - snelheidmens; 
  }

  if (keyIsDown(KEY_D)) {
    spelerX = spelerX + snelheidmens;
  }

  if (keyIsDown(KEY_W)) {
    spelerY = spelerY - snelheidmens;
  }

  if (keyIsDown(KEY_S)) {
    spelerY = spelerY + snelheidmens;
  }
  
  // vijand
  if (keyIsDown(KEY_LEFT)) {
    vijandX = vijandX - snelheidmens; 
  }

  if (keyIsDown(KEY_RIGHT)) {
    vijandX = vijandX + snelheidmens; 
  }

  if (keyIsDown(KEY_UP)) {
    vijandY = vijandY - snelheidmens; 
  }

   if (keyIsDown(KEY_DOWN)) {
    vijandY = vijandY + snelheidmens; 
  }



  // kogel

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 50 && spelerX - vijandX > -50 && spelerY - vijandY < 50 && spelerY - vijandY > -50) {
    console.log("Botsing");
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
fill("pink");
rect(0, 0, 1280, 720);
  // map
  fill(0,0,0);
rect(0, 675, 1280, 70);
  // vijand

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
