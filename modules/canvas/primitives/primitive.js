"use strict";
import { Vector2 } from "../../math/math_module.js";

class Primitive {
    context;
    position;
    style;

    /**
     * Creates a generic primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, s) {
        this.context = ctx;
        this.position = p;
        this.style = s;
    }
}

export { Primitive as default, Vector2 };
