"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Circle extends Primitive {
    _radius;

    /**
     * Creates a circle primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {number} r Radius
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, r, s) {
        super(ctx, p, s);
        this._radius = r;
    }

    get radius() {
        return this._radius;
    }

    set radius(v) {
        if (Number.isNaN(v)) {
            return
        }
        this._radius = v;
    }

    draw() {
        let ctx = this._ctx;
        ctx.fillStyle = this._style;
        ctx.beginPath();
        ctx.arc(this._pos.x, this._pos.y, this._radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

export { Circle as default, Vector2 };
