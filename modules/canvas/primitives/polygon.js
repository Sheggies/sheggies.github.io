"use strict";
import { default as Primitive, Vector2 } from "./primitive.js";

class Polygon extends Primitive {
    vertices;

    /**
     * Creates a polygon primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     * @param  {...Vector2} v Vertices
     */
    constructor(ctx, s, ...v) {
        super(ctx, v[0], s);
        this.vertices = v;
    }

    draw() {
        let ctx = this.context;
        let p = this.position;
        let region = new Path2D();
        ctx.fillStyle = this.style;

        region.moveTo(p.x, p.y);

        for (let i = 1; i < this.vertices.length; i++) {
            let v = this.vertices[i];
            region.lineTo(v.x, v.y);
        }

        region.closePath();
        ctx.fill(region);
    }
}

export { Polygon as default, Vector2 };
