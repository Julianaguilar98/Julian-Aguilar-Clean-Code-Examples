# Functions

```
class Square {
    constructor(length: number) {
        this.length = length || 0;
    }

    length: number;
```
In the function quadrupleSquareSize we abstract the calculations of scaling the square.
```
    quadrupleSquareSize(square: Square): Square {
        const isValidSquare = this.checkSquareHasArea(square);

        if (isValidSquare) {
            return this.scaleSquareSize(4, square); //
        } else {
            return new Square(0);
        }
    }
```
Notice how the blocks within the if and else statements are one line long.
This helps functions stay small, and do one thing. As a plus, the function called can have a descriptive name.

The code should read from top to bottom, so that each function follows the next level of abstraction.
Notice how these functions are small and doing one thing. They also have descriptive names.
```
    checkSquareHasArea(square: Square): boolean {
        return square.length > 0;
    }

    scaleSquareSize(multiplier: number, square: Square): Square {
        return new Square(square.length * multiplier);
    }
}
```
## Function Arguments
The less arguments in a function, the better. Any more than three needs special justification.

## Don't repeat yourself!
Here we are extending the Square class to avoid unecessary duplication:
```
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
```