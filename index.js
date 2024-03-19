import { writeFile } from './node_modules/graceful-fs/graceful-fs';
import { prompt } from "inquirer";
import { Circle, Square, Triangle } from ".lib/shapes";
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
    writeFile(fileName, data, function (err) {if (err) {return console.log(err);
    } console.log("Congrats! You Generated a logo.SVG!");
});
}

async function init() {
    console.log("Started Initialization");
    const svgString = "";
    const svg_File = "logo.svg";


    const answers = await prompt(questions);

    let user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid user input detected! Please enter 1-3 characters only.");
        return;
    }
    console.log("User Text: [" + user_text + "]");
        //font color
    user_font_color = answers["text-color"];
    console.log("user font color: [" + user_font_color + "]");
        // shape color
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
        //shape type
    user_shape_type = answers["pixel-image"];
    console.log("User entered shape + [" + user_shape_type + "]");

    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle shape");
    } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle shape");
    } else {
        console.log("Invalid Shape");
    }
    user_shape.setColor(user_shape_color);

    const svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    console.log("Displaying shape:\n\n" + svgString);
    console.log("Shape creation finished!");
    console.log("Writing shape to file...");
    writeToFile(svg_File, svgString);
}
init()
