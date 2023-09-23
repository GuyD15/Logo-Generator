const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require(".")

// Function to save the generated SVG to a file
function saveLogo(svgLogo) {
  fs.writeFile('logo.svg', svgLogo, (err) => {
    if (err) throw err;
    console.log('Generated SVG logo');
  });
}

// Function to prompt the user and generate the logo
async function generateLogo() {
  const shapeChoices = ['Triangle', 'Circle', 'Square'];

  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (text) => text.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ]);

  let shape;

  switch (userInput.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape selected.');
      return;
  }

  shape.setColor(userInput.shapeColor);

  const svgLogo= `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="10" y="30" font-size="20" fill="${userInput.textColor}">${userInput.text}</text>
</svg>
`;

  saveLogo(svgLogo);
}
generateLogo();
