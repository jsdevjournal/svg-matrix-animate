
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
document.getElementById("matrix-container").appendChild(svg);

const words = [
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
const getRandomNumber = (min, max) => () => Math.floor(Math.random() * (max - min) + min);
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const numRows = 30; // Number of rows in animation
const getAnimationDuration = getRandomNumber(2, 12); // Range of animation durations (in seconds)
const getFontSize = getRandomNumber(10, 40); // Range of font sizes (in pixels)
const getX = getRandomNumber(0, windowWidth);
const getWordIndex = getRandomNumber(0, words.length - 1);
const getTimeout = getRandomNumber(1000, 4000);


function createWord(x, word) {
  const animationDuration = getAnimationDuration();
  const fontSize = getFontSize();
  const wordHeight = fontSize * word.length;

  const wordContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  wordContainer.setAttribute('transform', `translate(${x}, ${Math.random() * -wordHeight})`);
  
  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.textContent = character;
    textElement.setAttribute('x', 0);
    textElement.setAttribute('y', i * fontSize);
    textElement.setAttribute('fill', 'green');
    textElement.setAttribute('fill-opacity', fontSize/40);
    textElement.setAttribute('font-size', fontSize);
    wordContainer.appendChild(textElement);
  }

  const animateElement = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  animateElement.setAttribute('attributeName', 'transform');
  animateElement.setAttribute('attributeType', 'XML');
  animateElement.setAttribute('type', 'translate');
  animateElement.setAttribute('values', `${x} ${-wordHeight}; ${x} ${windowHeight}`);
  animateElement.setAttribute('dur', `${animationDuration}s`);
  animateElement.setAttribute('repeatCount', 'indefinite');
  wordContainer.appendChild(animateElement);

  return wordContainer;
}

const createNewVal = () => ({
  x: getX(),
  word: words[getWordIndex()]
})

function pushMatrix(val) {
  const word = createWord(val.x, val.word);
  svg.appendChild(word);
  // setTimeout(pushMatrix.bind(null, createNewVal()), getTimeout());
}

words.forEach(() => {
  pushMatrix(createNewVal());
  pushMatrix(createNewVal());
});

// setTimeout(pushMatrix.bind(null, createNewVal()), getTimeout());
