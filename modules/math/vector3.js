"use strict";

class Vector3 {
    x;
    y;
    z;

    /**
     * Creates a new 3D vector
     * @param {number} x X component
     * @param {number} y Y component
     * @param {number} z Z component
     */
    constructor(x, y, z) {
        this.x = Number.isNaN(x) ? 0 : x;
        this.y = Number.isNaN(y) ? 0 : y;
        this.z = Number.isNaN(z) ? 0 : z;
    }

    /**
     * Returns the name of the class
     * @returns {string} Name
     */
    get name() {
        return "Vector3";
    }

    /**
     * Gets the length of the vector
     * @returns {number} The length
     */
    get length() {
        return (this.x**2 + this.y**2 + this.z**2)**(1/2);
    }

    /**
     * Adds every vector in `v` to the vector
     * @param {...Vector3} v Vertices to add
     */
    add(...v) {
        for (e in v) {
            this.x += e.x;
            this.y += e.y;
            this.z += e.z;
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
        this.z *= s;
    }

    /**
     * Normalises the vector to length 1
     */
     normalise() {
        this.scale(this.length**-1);
    }

    /**
     * Returns the dot product with the passed vector
     * @param {Vector3} b The vector to perform the dot product with
     * @returns {number} The dot product
     */
    dot(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    /**
     * Returns the angle to the passed vector in radians
     * @param {Vector3} b The relative vector to get the angle from
     * @returns {number} The angle
     */
    angle(b) {
        return Math.acos(this.dot(b) / (this.length * b.length));
    }

    /**
     * Returns the cross product to the passed vector as a new vector
     * @param {Vector3} b The vector to perform the cross product with
     * @returns {Vector3} The resulting vector
     */
    cross(b) {
        let x = this.y * b.z - this.z * b.y;
        let y = this.z * b.x - this.x * b.z;
        let z = this.x * b.y - this.y * b.x;

        return new Vector3(x, y, z);
    }

    /**
     * Adds multiple 3D vertices and returns the result as a new vector
     * @param {...Vector3} v Vertices to add together
     * @returns {Vector3} The resulting vector
     */
    static addVertices(...v) {
        n = new Vector3(0, 0);

        for(e in v) {
            n.x += e.x;
            n.y += e.y;
            n.z += e.z;
        }

        return n;
    }
}

export default Vector3;
