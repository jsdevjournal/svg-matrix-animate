
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
document.getElementById("matrix-container").appendChild(svg);

const WORDS = [
  "Futurïstic", "Vïrtuál", "Cybêr", "Ëlectronic", "Hologrâph", 
  "Ârtificial", "Nanøtech", "Bîonic", "Hypermârket", "Phâser", 
  "Antigrâvity", "Ëxoplanet", "Trãnsport", "Quantum", "Sølar", 
  "Bïomech", "Cryôgenics", "Stëllar", "Spãceship", "Nëural", 
  "Resøurce", "Ëxperiment", "Spëcial", "Astêroid", "Plasmâ", 
  "Cøsmic", "Nëbulâ", "Videõ", "Xenølogy", "Zerø-grâvity", 
  "Mâtrix", "Antimâtter", "Warp", "Fïction", "Teleport", 
  "Nãnotech", "Cyborg", "Mëgastructurë", "Hâcking", "Infïnite", 
  "Intergãlactic", "Ëxtraterrestrial", "Synthétic", "Vïrtuosity", "Télékinesis", 
  "Interfâce", "Ëther", "Sîmulation", "Astrønaut", "Pãrallel", 
  "Nãnobot", "Stëalth", "Måtrix", "Ëxploration", "Lâser", 
  "Pørtal", "Gâlactic", "Bïotech", "Phøton", "Thêory", 
  "Rôbotic", "Orbît", "Ëcology", "Bîoengineering", "Hydrøponic", 
  "Télomere", "Ëxoplanetary", "Cløning", "Cøsmos", "Intelligence", 
  "Quâsar", "Dystopiãn", "Cøsmic", "Pølymer", "Vïsion", 
  "Xerôgraphics", "Andrøid", "Ëxosuit", "Pãrticle", "Ënvironment", 
  "Håløgram", "Dâtabase", "Nãnogenetics", "Energëtic", "Ëmpire", 
  "Gëne", "Ëlectromagnetic", "Stâtion", "Prôton", "Gënetic", 
  "Spëed", "Tëchnology", "Thëory", "Nëbula", "Cørporeal", 
  "Prôbe", "Quãntum", "Vôyage", "Rëplicant", "Spãcecraft",
  "Nëxús", "Cÿbér", "Tëchnø", "Fütürë", "Vírtúál",
  "Áugmënt", "Süpër", "Hýpër", "Nánø", "Rëplicánt",
  "Bïonic", "Aï", "Rëálity", "Mëga", "Quántüm",
  "Dígítál", "Sï-Fí", "Elëktrø", "Hölogrâph", "Röbot",
  "Sürrëal", "Exø", "Vírtúa", "Nänö", "Hólogrâfía",
  "Äugménted", "Tëléport", "Ëxoplanet", "Trânshumán", "Ärtificïal",
  "Hóverboard", "Äströnomy", "Cryönic", "Üniverse", "Tëlepathy",
  "Nânotech", "Gënëtics", "Bïotech", "Vïrtuälity", "Dýstopian",
  "Biónics", "Älíën", "Clónë", "Pârallel", "Süstáinable",
  "Ärmored", "Hýdrógen", "Äëronáutics", "Äntigrávity", "Ätom",
  "Hölogrâm", "Ästëróid", "Äirshíp", "Älternate", "Gäïa",
  "Résérvoír", "Électrön", "Mätrix", "Láser", "Äërospáce",
  "Füsïon", "Sýnthétic", "Gëothermäl", "Pärticle", "Spâcestátion",
  "Cósmic", "Üfö", "Gäläxy", "Súpersónic", "Phótón",
  "Hólográphic", "Ärtifïcial", "Röcket", "Grávity", "Tïméträvel",
  "Bïomechánic", "Súperscïence", "Sürge", "Pläsmä", "Ëcösystém",
  "Nëutrïno", "Bïodôme", "Tëléportátion", "Äströnäut", "Háckér",
  "Äliënätiön", "Ëvolútion", "Thëorïes", "Ütopïa", "Cïrcuït",
  "Sölar", "Prótón", "Nänóbots", "ÜFOlogïst", "Älterïng",
  "Ünearthly", "Tïmespän", "Dïstört", "Vïräl", "Phäntom",
  "Ëxträterrestrial", "Äïrlock", "Ëtherëäl", "Nüclëär", "Pülse"
];


const DEFAULT_WORD_COUNT = 300;
const MIN_DURATION = 1.5;
const MAX_DURATION = 14;
const MIN_FONTSIZE = 10;
const MAX_FONTSIZE = 60;
const getRandomNumber = (min, max) => () => Math.floor(Math.random() * (max - min) + min);
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const numRows = 30; // Number of rows in animation
const getAnimationDuration = getRandomNumber(MIN_DURATION, MAX_DURATION); // Range of animation durations (in seconds)
const getFontSize = getRandomNumber(MIN_FONTSIZE, MAX_FONTSIZE); // Range of font sizes (in pixels)
const getX = getRandomNumber(0, windowWidth);
const getWordIndex = getRandomNumber(0, WORDS.length - 1);

function createElementNS(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createTextElem(x, y, character, fontSize) {
  const textElement = createElementNS('text');
  textElement.textContent = character;
  textElement.setAttribute('x', x);
  textElement.setAttribute('y', y);
  textElement.setAttribute('fill', 'green');
  textElement.setAttribute('fill-opacity', fontSize / MAX_FONTSIZE);
  textElement.setAttribute('font-size', fontSize);
  return textElement;
}

function createAnimationElem(startX, endX, startY, endY) {
  const animationDuration = getAnimationDuration();
  const animateElement = createElementNS('animateTransform');
  animateElement.setAttribute('attributeName', 'transform');
  animateElement.setAttribute('attributeType', 'XML');
  animateElement.setAttribute('type', 'translate');
  animateElement.setAttribute('values', `${startX} ${startY}; ${endX} ${endY}`);
  animateElement.setAttribute('dur', `${animationDuration}s`);
  animateElement.setAttribute('repeatCount', 'indefinite');
  return animateElement;
}

function createWordElem(x, word) {
  const fontSize = getFontSize();
  const wordHeight = fontSize * word.length;

  const wordContainer = createElementNS('g');
  wordContainer.setAttribute('transform', `translate(${x}, ${Math.random() * -wordHeight})`);
  
  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    const textElement = createTextElem(x, i * fontSize, character, fontSize);
    wordContainer.appendChild(textElement);
  }

  const animateElement = createAnimationElem(x, x, -wordHeight, windowHeight);
  wordContainer.appendChild(animateElement);

  return wordContainer;
}

const createNewVal = () => ({
  x: getX(),
  word: WORDS[getWordIndex()]
})

function pushMatrix(val) {
  const word = createWordElem(val.x, val.word);
  svg.appendChild(word);
}

for (let i = 0; i < DEFAULT_WORD_COUNT; i++) {
  pushMatrix(createNewVal());
}
