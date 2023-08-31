
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
document.getElementById("matrix-container").appendChild(svg);

const WORDS = [
  "Algorithm",
  "Artificial",
  "Augmented",
  "Automation",
  "Big Data",
  "Biometrics",
  "Blockchain",
  "Cloud",
  "Coding",
  "Cryptocurrency",
  "Cybersecurity",
  "Database",
  "Deep Learning",
  "Digital",
  "Encryption",
  "Firmware",
  "Gadget",
  "Genome",
  "Hologram",
  "Innovation",
  "Internet",
  "Machine Learning",
  "Microchip",
  "Mobile",
  "Network",
  "Open Source",
  "Operating System",
  "Quantum",
  "Robotics",
  "Software",
  "Virtual",
  "Wireless",
  "3D Printing",
  "Agile",
  "Analytics",
  "Artificial Intelligence",
  "Authentication",
  "Automation",
  "Backend",
  "Big Data",
  "Biometrics",
  "Blockchain",
  "Cloud Computing",
  "Code",
  "Compiler",
  "Computer",
  "Cybersecurity",
  "Data Mining",
  "Data Science",
  "Database",
  "Debugging",
  "Digital",
  "E-commerce",
  "Encryption",
  "Firmware",
  "Frontend",
  "Gadget",
  "Hacking",
  "Hardware",
  "HTML",
  "Information",
  "Innovation",
  "Internet",
  "IoT",
  "JavaScript",
  "Kernel",
  "Machine Learning",
  "Malware",
  "Metadata",
  "Microchip",
  "Mobile",
  "Network",
  "Operating System",
  "Password",
  "Programming",
  "Quantum",
  "Responsive",
  "Robotics",
  "Scalability",
  "Security",
  "Server",
  "Software",
  "Technology",
  "Virtual",
  "Web Development",
  "Website",
  "Wireless",
];

const DEFAULT_WORD_COUNT = 150;
const MIN_DURATION = 2;
const MAX_DURATION = 12;
const MIN_FONTSIZE = 10;
const MAX_FONTSIZE = 40;
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
