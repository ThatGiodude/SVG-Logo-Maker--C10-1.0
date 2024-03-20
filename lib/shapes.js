// Importing the 'is-css3-color' module to validate color codes
const isCSSHexCode = require('is-css3-color');
// Parent class for defining common properties and methods for shapes
class Shape {
    constructor(text, textColor, logoShape, logoColor){
        // Initializing shape properties
        this.logoShape = logoShape;
        this.validateColorCode(textColor);
        this.textColor = textColor;
        this.validateTextLength(text);
        this.text = text;
        this.validateColorCode(logoColor);
        this.logoColor = logoColor;
    // Validating and setting text color, text length, and setting logo color
}
    // method checks if the input is empty
checkInput(input){
    if(!input) throw new Error('Input cannot be empty');
}
    // this method checks the text length
validateTextLength(input){
    this.checkInput(input);
    if(input.length > 3){
        throw new Error('Logo text cannot be more than 3 characters');
    }
}
    //this method checks the color code
validateColorCode(input){
    this.checkInput(input);
    input = input.toLowerCase();
    if(!isCSSHexCode(input)) {
        throw new Error('Please enter a valid CSS hexadecimal code or color keyword');
    }
}
render() {  //this method renders the shape through the child classes
    throw new Error('Child shapes must implement a render() method')
}
}
    // the classes below are extentions of the shape class above and the constructors extend them to fit new parameters
class Square extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render(){
        return `<rect width="250" height="250" fill="${this.logoColor}"/>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render() {
            return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}"/>`;
          }
    }


class Triangle extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render() {
        return `<polygon points="0 100, 25 ,0 80, 115" fill="${this.logoColor}"/>`;
    }
}
    // exports the classes to be used in other files
module.exports = {Shape, Square, Circle, Triangle}