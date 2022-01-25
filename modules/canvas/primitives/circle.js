"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Circle extends Primitive {
    radius;

    /**
     * Creates a circle primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {number} r Radius
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, r, s) {
        super(ctx, p, s);
        this.radius = r;
    }

    draw() {
        let ctx = this.context;
        let p = this.position;
        ctx.fillStyle = this.style;

        ctx.beginPath();
        ctx.arc(p.x, p.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fill();
    }
}

export { Circle as default, Vector2 };
