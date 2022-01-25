"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Polygon extends Primitive {
    _vertices;

    /**
     * Creates a polygon primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     * @param  {...Vector2} v Vertices
     */
    constructor(ctx, s, ...v) {
        super(ctx, v[0], s);
        this._vertices = v;
    }

    get vertices() {
        return this._vertices;
    }

    set vertices(v) {
        this._vertices = v ?? this._vertices;
    }

    draw() {
        let ctx = this._ctx;
        ctx.fillStyle = this._style;

        let region = new Path2D();
        region.moveTo(this._pos.x, this._pos.y);

        for (let i = 1; i < this._vertices.length; i++) {
            let v = this._vertices[i];
            region.lineTo(v.x, v.y)
        }

        region.closePath();
        ctx.fill(region);
    }
}

export { Polygon as default, Vector2 };
