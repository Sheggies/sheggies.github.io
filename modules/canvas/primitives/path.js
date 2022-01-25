import { default as Primitive, Vector2 } from "./primitive.js";

class Path extends Primitive {
    width;
    vertices;

    /**
     * Creates a path primitive
     * @param {CanvasRenderingContext2D} ctx Rendering context
     * @param {string|CanvasGradient|CanvasPattern} s Fill style
     * @param {number} w Line width
     * @param  {...Vector2} v Vertices
     */
    constructor(ctx, s, w, ...v) {
        super(ctx, v[0], s);
        this.width = w;
        this.vertices = v;
    }

    draw() {
        let ctx = super.context;
        let p = super.position;
        ctx.lineWidth = this.width;
        ctx.fillStyle = super.style;

        ctx.beginPath()
        ctx.moveTo(p.x, p.y);

        for (let i = 1; i < this.vertices.length; i++) {
            let v = this.vertices[i];
            ctx.lineTo(v.x, v.y)
        }

        ctx.closePath();
        ctx.stroke();
    }
}

export  { Path as default, Vector2 };
