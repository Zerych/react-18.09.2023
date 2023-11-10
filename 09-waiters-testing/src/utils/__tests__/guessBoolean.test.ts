import {guessBoolean} from '../guessBoolean'

describe('guessBoolean', () => {
    describe('positive', () => {
        it('should return true if "true" str provided', () => {
            expect(guessBoolean('true')).toBe(true)
        })

        it('should return true if "True" str provided', () => {
            expect(guessBoolean('True')).toBe(true)
        })

        it('should return true if "TRUE" str provided', () => {
            expect(guessBoolean('TRUE')).toBe(true)
        })

        it('should return true if "yes" str provided', () => {
            expect(guessBoolean('yes')).toBe(true)
        })

        it('should return true if "1" str provided', () => {
            expect(guessBoolean('1')).toBe(true)
        })

        it('should return true if true value provided', () => {
            expect(guessBoolean(true)).toBe(true)
        })

        it('should return true if 1 number provided', () => {
            expect(guessBoolean(1)).toBe(true)
        })
    })

    describe('negative', () => {
        it('should return false if any "non-true" str provided', () => {
            expect(guessBoolean('any other string')).toBe(false)
            expect(guessBoolean('any other string')).not.toBe(undefined)
        })

        it('should return false if false value provided', () => {
            expect(guessBoolean(false)).toBe(false)
            expect(guessBoolean(false)).not.toBe(undefined)
        })

        it('should return false if 0 number provided', () => {
            expect(guessBoolean(0)).toBe(false)
            expect(guessBoolean(0)).not.toBe(undefined)
        })

        it('should return false if empty array provided', () => {
            expect(guessBoolean([])).toBe(false)
            expect(guessBoolean([])).not.toBe(undefined)
        })

        it('should return false if empty object provided', () => {
            expect(guessBoolean({})).toBe(false)
            expect(guessBoolean({})).not.toBe(undefined)
        })
    })
})
