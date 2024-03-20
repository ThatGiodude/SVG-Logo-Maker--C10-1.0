// imports the shapes and their parameters described in the shapes folder
const {Square, Circle, Triangle} = require('../lib/shapes.js');
//tests should generate based on the parameters described below
describe('Shapes', () => {
    describe('square', () => {
      it('should create a square svg formatted hypertext with inputted color', () => {
        const square = new Square('abc', 'black', 'square', 'blue');
        const testSquare = square.render('green');
        console.log(testSquare);
        expect(testSquare).toEqual(`<rect width="250" height="250" fill="blue"/>`);
      });
    });
  });
  
describe('Shapes', () => {
    describe('circle', () => {
      it('should create a circle svg formatted hypertext with inputted color', () => {
        const circle = new Circle('efg', 'white', 'circle', 'black');
        const testCircle = circle.render('blue');
        console.log(testCircle);
        expect(testCircle).toEqual(`<circle cx="50" cy="50" r="50" fill="black"/>`);
      });
    });
  });

describe('Shapes', () => {
    describe('triangle', () => {
      it('should create a triangle svg formatted hypertext with inputted color', () => {
        const triangle = new Triangle('123', 'yellow', 'square', 'pink');
        const testTriangle = triangle.render('pink');
        console.log(testTriangle);
        expect(testTriangle).toEqual(`<polygon points="0 100, 25 ,0 80, 115" fill="pink"/>`);
      });
    });
  });