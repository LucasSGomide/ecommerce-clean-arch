import { InvalidFieldError } from '../errors/InvalidFieldError'
import { IValidation } from '../protocols/IValidation'

export class EqualCharactersValidation implements IValidation {
    private valueArray: string[] = []

    execute(value: string): Error {
        this.valueArray = value.split('')
        const firstCharacter = this.valueArray[0]

        const isEqualCharacters = this.valueArray.every(
            (character) => character === firstCharacter
        )

        if (isEqualCharacters) throw new InvalidFieldError()
        return null
    }
}
