"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Rectangle extends Primitive {
    dimension;

    /**
     * Creates a rectangle primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {Vector2} d Dimension
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, d, s) {
        super(ctx, p, s);
        this.dimension = d;
    }

    draw() {
        let ctx = this.context;
        let p = this.position;
        let d = this.dimension;

        ctx.fillStyle = this.style;
        ctx.fillRect(p.x, p.y, d.x, d.y);
    }
}

export { Rectangle as default, Vector2 };
