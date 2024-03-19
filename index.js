const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require(".lib/shapes");
//imports all the necessary packages and the shape folder. still have to export that REMEMBER
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmins="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}
//Defines the array using inquierer
const questions = [
    {
        type:"input",
        name:"text",
        message: "Text: Enter up to (3) characters:",
    },
    {
        type:"input",
        name: "text-color",
        message: "Text Color: Enter a color keyword.:",
    },
    {
        type:"input",
        name: "shape",
        message: "Shape Color: Enter a color keyword.:",
    },
    {
        type:"input",
        name:"pixel-image",
        message: "Choose which image shaoe you would like.",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    console.log("Writing [" + data +"] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {if (err) {return console.log(err);
    } console.log("Congrats! You Generated a logo.SVG!");
});
}

async function init() {
    console.log("Started Initialization");
    const svgString = "";
    const svg_File = "logo.svg";
    const answers = await inquirer.createPromptModule(questions);

    const user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid user input detected! Please enter 1-3 characters only.");
        return;
    }
}
