const expect = require('chai').expect;
const app = require('./index.js');


describe('Class App', () => {
    describe('Motor Class', () => {
        it('Should create a class', () => {
            const myMotor = new app.Car("This " +
            this.brand +
            " with " +
            this.wheels +
            " wheels" +
            " and a milage limit of " +
            this.miles +
            " belongs to " +
            this.owner +
            " and was bought in " +
            this.year);
            expect(myMotor).to.be.an('object');
        });
        it('Should return the details of the car', () => {
            const myOwn = new app.Car("This " +
            this.brand +
            " with " +
            this.wheels +
            " wheels" +
            " and a milage limit of " +
            this.miles +
            " belongs to " +
            this.owner +
            " and was bought in " +
            this.year);;
            expect(myOwn).to.not.be.an('array');
        });
    })
})