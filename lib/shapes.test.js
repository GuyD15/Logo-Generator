const { Circle, Square, Triangle, Star } = require("./shapes");

describe('Circle', () => {
    test('renders Circle correctly', () => {
        const shape = new Circle();
        var color = 'green'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('renders Square correctly', () => {
        const shape = new Square();
        var color = 'orange'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="0" height="200" width="200" fill="${color}" />`);
    });
});

describe('Triangle', () => {
    test('renders Triangle correctly', () => {
        const shape = new Triangle();
        var color = 'purple'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}" />`);
    });
});

describe('Star', () => {
    test('renders Star correctly', () => {
        const shape = new Star();
        var color = 'Gold'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="50,5 20,99 95,30 5,30 80,99" fill="${color}" />`);
    });
});