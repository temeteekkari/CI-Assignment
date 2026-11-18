import { expect } from 'chai'
import add from '../src/add.js'

describe('add', function() {

    it('first test', function() {
        expect(add(1, 1)).to.equal(2)
    })

})