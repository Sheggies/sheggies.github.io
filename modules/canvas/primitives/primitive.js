"use strict";
import { Vector2 } from "../../math/math_module.js";

class Primitive {
    _ctx;
    _pos;
    _style;

    /**
     * Creates a generic primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {Vector2} p Position
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     */
    constructor(ctx, p, s) {
        this._ctx = ctx;
        this._pos = p;
        this._style = s;
    }

    /**
     * The primitive's position
     * @returns {Vector2} Position
     */
    get position() {
        return new Vector2(this._pos.x, this._pos.y);
    }

    /**
     * The primitive's position
     * @param {Vector2} v Position
     */
    set position(v) {
        this._pos = v ?? this._pos;
    }

    /**
     * The primitive's fill style
     * @returns {string|CanvasGradient|CanvasPattern} Fill style
     */
    get style() {
        return this._style;
    }

    /**
     * The primitive's fill style
     * @param {string|CanvasGradient|CanvasPattern} v Fill style
     */
    set style(v) {
        this._style = v ?? this._style;
    }

    /**
     * The primitive's rendering context
     * @returns {CanvasRenderingContext2D} Rendering context
     */
    get context() {
        return this._ctx;
    }
}

export { Primitive as default, Vector2 };
