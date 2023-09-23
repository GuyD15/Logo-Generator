const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle, Star } = require("./lib/shapes");

function saveLogo(svgLogo) {
    fs.writeFile('logo.svg', svgLogo, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}

async function generateLogo() {
    const shapeChoices = ['Triangle', 'Circle', 'Square', 'Star'];

    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the text:',
            validate: (text) => text.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color for the text color :',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape:',
            choices: shapeChoices,
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color for the shape color:',
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
        case 'Star': 
            shape = new Star();
            break;
        default:
            console.error('Invalid shape selected.');
            return;
    }

    shape.setColor(userInput.shapeColor);

    const svgLogo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="120" font-family="Arial" font-size="40" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
</svg>
`;

    saveLogo(svgLogo);
}

generateLogo();
