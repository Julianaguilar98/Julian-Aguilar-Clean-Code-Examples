//Functions

class Square {
    constructor(length: number) {
        this.length = length || 0;
    }

    length: number;


    // One level of Abstraction per function.
    // In this function we abstract the calculations of scaling the square.
    quadrupleSquareSize(square: Square): Square {
        const isValidSquare = this.checkSquareHasArea(square);

        if (isValidSquare) { // Blocks within if, else, and while statements should be one line long.
            return this.scaleSquareSize(4, square); // That line should be a function call
        } else {
            return new Square(0);
        }
    }

    // The code should read from top to bottom, so that each function follows the next level of abstraction.
    // Functions should always be small
    checkSquareHasArea(square: Square): boolean {// Use Descriptive Names (example: checkRealSquare is not as descriptive.)
        return square.length > 0;
    }

    // Functions should only do one thing.
    scaleSquareSize(multiplier: number, square: Square): Square { // The less arguments in a function, the better. Any more than three needs special justification.
        return new Square(square.length * multiplier);
    }
}


// Don't Repeat Yourself: Extending classes removes unecessary duplication.
class ColoredSquare extends Square {
    constructor(length: number) {
        super(length);
    }
    color?: string;

    private setSquareColor(square: ColoredSquare): void {
        switch (square.length) {
            case (1):
                square.color = 'Blue';
            case (2):
                square.color = 'Green';
            case (3):
                square.color = 'Red';
        }
    }
}