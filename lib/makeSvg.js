//function below creates and SVG logo based on the shapes data
const generateSVG = (shapes) =>{
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapes.render()}
      <text
        x="${shapes.logoShape != 'triangle' ? '50%' : '33%'}"
        y="${shapes.logoShape != 'triangle' ? '50%' : '60%'}"
        text-anchor="middle"
        fill="${shapes.textColor}"
        font-size="1.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${shapes.text}
      </text>
    </svg>
    `;
};

//imports the shape classes from shapes.js
const {Shape, Square, Circle, Triangle} = require('./shapes');

// creates the shape based on user input
const makeShape = (data) => {
    const { logoShape } = data;
    switch(logoShape) {
        case 'circle':
        const makeCircle = new Circle(data.text, data.textColor, data.logoShape, data.logoColor);
        return makeCircle;
        break;

        case 'square':
        const makeSquare = new Square(data.text, data.textColor, data.logoShape, data.logoColor);
        return makeSquare;
        break;

        case 'triangle':
        const makeTriangle = new Triangle(data.text, data.textColor, data.logoShape, data.logoColor);
        return makeTriangle;
        break;

        default:
            return 'Please choose a shape';
    }
};

// exports the makeShape and generateSVG function
module.exports = {generateSVG, makeShape};