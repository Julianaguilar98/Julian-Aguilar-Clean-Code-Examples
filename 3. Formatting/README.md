# Formatting
Code should be well formatted.
Using the code from my Functions example, I removed all the whitespace and moved around indentations.

## This is unformatted code.
```
class Square {
    constructor(length: number, width: number) {
        this.length = length || 0;
        this.width = width || 0;
    }
    length: number;
        width: number;
    quadrupleSquareSize(square: Square): Square {
        const isTrueSquare = this.checkIfIsTrueSquare(square);
        if (isTrueSquare) {
          return this.scaleSquareSize(4, square);
        } else {
            return new Square(0, 0);
        }
    }
    checkIfIsTrueSquare(square: Square): boolean {
        return square.length === square.width;
    }
        scaleSquareSize(multiplier: number, square: Square): Square {
        return new Square(square.length * multiplier, square.width * multiplier);
        }
}
class Rectangle extends Square {
constructor(length: number, width: number) {
    super(length, width);
}
checkIfIsRectangle(rectangle: Rectangle): boolean {
    return !this.checkIfIsTrueSquare(rectangle);
}
}
```
Indentation and proper line breaks are important for code readability.
Using tools such as Prettier and ESLint are highly encouraged.

## This is the same code formatted using ESLint:
```
class Square {
    constructor(length: number, width: number) {
        this.length = length || 0;
        this.width = width || 0;
    }

    length: number;
    width: number;

    quadrupleSquareSize(square: Square): Square {
        const isTrueSquare = this.checkIfIsTrueSquare(square);

        if (isTrueSquare) {
            return this.scaleSquareSize(4, square);
        } else {
            return new Square(0, 0);
        }
    }

    checkIfIsTrueSquare(square: Square): boolean {
        return square.length === square.width;
    }

    scaleSquareSize(multiplier: number, square: Square): Square {
        return new Square(square.length * multiplier, square.width * multiplier);
    }
}

class Rectangle extends Square {
    constructor(length: number, width: number) {
        super(length, width);
    }

    checkIfIsRectangle(rectangle: Rectangle): boolean {
        return !this.checkIfIsTrueSquare(rectangle);
    }
}
```
Without a doubt, this code is much more readable.
The line breaks in between classes and functions are helpful for reading the code top to bottom as a cohesive piece.

# Other Notes
```
class Square {
    constructor(length: number, width: number) {
        this.length = length || 0;
        this.width = width || 0;
    }

    length: number; //Vertical Density: All functions and class property's have the same indentation.
    width: number; // Instance variables should be declared at the top.
                    //Team Rules: Adding a line of space between "chunks" of code helps other dev's read the code easier.
    quadrupleSquareSize(square: Square): Square {
        const isTrueSquare = this.checkIfIsTrueSquare(square); //Horizontal Formatting: Inside the function, there is more indentation added to help readability of the scope.

        if (isTrueSquare) {
            return this.scaleSquareSize(4, square);
        } else {
            return new Square(0, 0);
        }
    }

    checkIfIsTrueSquare(square: Square): boolean { //Vertical Distance & Dependent Functions: This function is defined right next to the above function that calls it.
        return square.length === square.width;
    }

    scaleSquareSize(multiplier: number, square: Square): Square {// Spaces in between functions also greatly help readability.
        return new Square(square.length * multiplier, square.width * multiplier);
    }
}
```