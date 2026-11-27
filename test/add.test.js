import { expect } from 'chai'
import add from '../src/add.js'

describe('add()', function() {

    describe('Phase 1 tests', function() {

        it('should return the sum of two positive numbers', function() {
            expect(add(4, 3)).to.equal(7)
        })

        it('should return the sum of two negative numbers', function() {
            expect(add(-4, -3)).to.equal(-7)
        })

        it('should correctly add decimal numbers', function() {
            expect(add(4, 3.5)).to.equal(7.5)
        })

        it('should return the original number when adding zero', function() {
            expect(add(4, 0)).to.equal(4)
        })

        it('should throw an error when given a non-numeric string', function() {
            expect(() => add(4, 'a')).to.throw()
        })

    })

    describe('AI tests', function() {

        it('should return 2 when adding 1 and 1', function() {
            expect(add(1, 1)).to.equal(2)
        })

        it('should return zero when adding two zeros', function() {
            expect(add(0, 0)).to.equal(0)
        })

        it('should correctly add a positive and a negative number', function() {
            expect(add(10, -5)).to.equal(5)
        })

        it('should correctly add a negative and a positive number', function() {
            expect(add(-10, 5)).to.equal(-5)
        })

        it('should correctly add very large numbers', function() {
            expect(add(1000000, 2000000)).to.equal(3000000)
        })

        it('should correctly add very small decimal numbers', function() {
            expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.000001)
        })

        it('should return the same result regardless of argument order', function() {
            expect(add(5, 10)).to.equal(add(10, 5))
        })

        it('should throw an error when the first argument is a non-numeric string', function() {
            expect(() => add('abc', 5)).to.throw()
        })

        it('should throw an error when both arguments are non-numeric strings', function() {
            expect(() => add('abc', 'def')).to.throw()
        })

        it('should correctly add numbers with Infinity', function() {
            expect(add(Infinity, 5)).to.equal(Infinity)
        })

        it('should return NaN when adding NaN', function() {
            expect(add(NaN, 5)).to.be.NaN
        })

        it('should correctly add two floating-point numbers', function() {
            expect(add(1.25, 2.75)).to.equal(4)
        })

        it('should handle negative zero', function() {
            expect(add(-0, 0)).to.equal(0)
        })

    })

})