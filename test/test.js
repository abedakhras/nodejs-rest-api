const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {
        it('should do somthong', () => {
            assert.equal(1, 1)
        })
        it('should do somthong else', () => {
            assert.deepEqual({ name: 'steve' }, { name: 'steve' })
        })
    })
})