//Objects and Data Structures

class Point {
    constructor(x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    // Here, the implementation is exposed. Even if we set it to private, the getters and setters for these 'x' and 'y' variables would expose the implementation.
    public x: number; // We want to keep our variables private, so that no one else depends on them.
    public y: number; // This gives us the freedom to change the implementation when needed.
}

// With this implementation, the User cannot tell if the implementation is in Cartesian or Polar coordinates.
// With this interface, the x and y variables are kept private. The only way to set the point is to use the interface and set the point as Cartesian or Polar.
// Hiding the implementation by creating a layer of abstraction through the interface allows us to manipulate the data without knowing of its implementation.
interface Point {
    getX(): () => number;
    getY(): () => number;
    setCartesian(x: number, y: number): (x: number, y: number) => void
    getR(): () => number;
    getTheta(): () => number;
    setPolar(r: number, theta: number): (r: number, theta: number) => void
}

// Data/Object Anti-Symmetry

class Square {
    constructor(length: number) {
        this.length = length || 0;
    }

    length: number;
    color?: string;

    //Law of Demeter: a module should not know about the details of the object manipulated.
    setColorsForAllSquares(squares: Square[]): void {
        squares.forEach((square: Square) => { // Data Structures expose data with no significant behavior, making it easier to add behaviors to existing data structures.
            this.setSquareColor(square); // However, if we used a different data structure, the functions behavior will have to change
            //(Example: This function is manipulating an Array of Squares, however the Array data structure is of the same type. Another data structure would affect this function).
        });
    }

    // Setting this function as Private allows us to make sure this function is not called outside of the Square class.
    private setSquareColor(square: Square): void {
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