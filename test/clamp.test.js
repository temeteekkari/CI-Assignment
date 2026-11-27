import { expect } from 'chai'
import clamp from '../src/clamp.js'

describe('clamp() ', function () {


    describe('Phase 1 tests ', function () {

        it('Should return the lower bound when the number is smaller than the lower bound', function () {
            expect(clamp(-1, 0, 4)).to.equal(0)
        })

        it('Should return the upper bound when the number is larger than the upper bound', function () {
            expect(clamp(5, 0, 4)).to.equal(4)
        })

        it('Should return the input number when the input number is between the lower bound and the upper bound', function () {
            expect(clamp(3, 0, 4)).to.equal(3)
        })

        it('Should return the input number when the input number is between the lower bound and the upper bound', function () {
            expect(clamp(3, 0, 4)).to.equal(3)
        })

        it('Should return the input number when the input number is a string between the lower bound and the upper bound', function () {
            expect(clamp('3', 0, 4)).to.equal(3)
        })

        it('Should return NaN when the input number is not a number', function () {
            expect(clamp('r', 0, 4)).to.be.NaN
        })
    })

    describe('AI tests ', function () {
        it('should clamp a number to the lower bound', () => {
            expect(clamp(-10, -5, 5)).to.equal(-5)
        })

        it('should clamp a number to the upper bound', () => {
            expect(clamp(10, -5, 5)).to.equal(5)
        })

        it('should return the number if it is within the bounds', () => {
            expect(clamp(2, -5, 5)).to.equal(2)
        })

        it('should return the lower bound when the number equals it', () => {
            expect(clamp(-5, -5, 5)).to.equal(-5)
        })

        it('should return the upper bound when the number equals it', () => {
            expect(clamp(5, -5, 5)).to.equal(5)
        })

        it('should handle zero', () => {
            expect(clamp(0, -5, 5)).to.equal(0)
        })

        it('should handle negative bounds', () => {
            expect(clamp(-5, -10, -2)).to.equal(-5)
        })

        it('should handle positive bounds', () => {
            expect(clamp(15, 5, 10)).to.equal(10)
        })

        it('should convert string arguments to numbers', () => {
            expect(clamp('10', '-5', '5')).to.equal(5)
        })

        it('should treat NaN lower bound as zero', () => {
            expect(clamp(5, NaN, 10)).to.equal(5)
        })

        it('should treat NaN upper bound as zero', () => {
            expect(clamp(5, -10, NaN)).to.equal(0)
        })

        it('should return NaN when the number is NaN', () => {
            expect(clamp(NaN, -5, 5)).to.be.NaN
        })
    })

})