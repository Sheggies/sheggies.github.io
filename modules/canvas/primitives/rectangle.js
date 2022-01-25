"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Rectangle extends Primitive {
    _dimension;

    /**
     * Creates a rectangle primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {Vector2} d Dimension
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, d, s) {
        super(ctx, p, s);
        this._dimension = d;
    }

    get dimension() {
        return this._dimension;
    }

    set dimension(v) {
        this._dimension = v ?? this._dimension;
    }

    draw() {
        let ctx = this._ctx;
        ctx.fillStyle = this._style;
        ctx.fillRect(this._pos.x, this._pos.y, this._dimension.x, this._dimension.y);
    }
}

export { Rectangle as default, Vector2 };
