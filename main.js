import * as MathUtil from "./modules/math/math_module.js";
import * as CanvasModule from "./modules/canvas/canvas_module.js";

let v = new MathUtil.Vector2(1, 2);
let c = new CanvasModule.Canvas(0, document.getElementById("main"), 400, 400);

let circle = new CanvasModule.Circle(c.renderingContext, v, 10, "green");
circle.draw();
