import { default as Primitive, Vector2 } from "./primitive.js";

class Path extends Primitive {
    _width;
    _vertices;

    /**
     * Creates a path primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     * @param {number} w Line width
     * @param  {...Vector2} v Vertices
     */
    constructor(ctx, s, w, ...v) {
        super(ctx, v[0], s);
        this._width = w;
        this._vertices = v;
    }

    get vertices() {
        return this._vertices;
    }

    draw() {
        let ctx = this._ctx;
        ctx.lineWidth = this._width;
        ctx.fillStyle = this._style;

        ctx.beginPath()
        ctx.moveTo(this._pos.x, this._pos.y);

        for (let i = 1; i < this._vertices.length; i++) {
            let v = this._vertices[i];
            ctx.lineTo(v.x, v.y)
        }

        ctx.closePath();
        ctx.stroke();
    }
}

export  { Path as default, Vector2 };
