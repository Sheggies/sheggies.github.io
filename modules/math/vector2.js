"use strict";

class Vector2 {
    x;
    y;

    /**
     * Creates a new 2D vector
     * @param {number} x X component
     * @param {number} y Y component
     */
    constructor(x, y) {
        this.x = Number.isNaN(x) ? 0 : x;
        this.y = Number.isNaN(y) ? 0 : y;
    }

    /**
     * Returns the name of the class
     * @returns {string} Name
     */
    get name() {
        return "Vector2";
    }

    /**
     * Gets the length of the vector
     * @returns {number} The length
     */
    get length() {
        return (this.x**2 + this.y**2)**(1/2);
    }

    /**
     * Adds every vector in `v` to the vector
     * @param {...Vector2} v The vertices to add
     */
    add(...v) {
        for (e in v) {
            this.x += e.x;
            this.y += e.y;
        }
    }

    /**
     * Scales the vector by `s`
     * @param {number} s The scalar
     */
    scale(s) {
        if (Number.isNaN(s)) {
            return;
        }
        this.x *= s;
        this.y *= s;
    }

    /**
     * Normalises the vector to length 1
     */
    normalise() {
        this.scale(this.length**-1);
    }

    /**
     * Returns the dot product between the current and the passed vector
     * @param {Vector2} b The vector to perform the dot product with
     * @returns {number} The dot product
     */
    dot(b) {
        return this.x * b.x + this.y * b.y;
    }

    /**
     * Returns the angle between the current and the passed vector in radians
     * @param {Vector2} b The relative vector to get the angle from
     * @returns {number} The angle
     */
    angle(b) {
        return Math.acos(this.dot(b) / (this.length * b.length));
    }

    /**
     * Adds multiple 2D vertices and returns the result as a new vector
     * @param {...Vector2} v Vertices to add together
     * @returns {Vector2} The resulting vector
     */
    static addVertices(...v) {
        n = new Vector2(0, 0);

        for(e in v) {
            n.x += e.x;
            n.y += e.y;
        }

        return n;
    }
}

export default Vector2;
