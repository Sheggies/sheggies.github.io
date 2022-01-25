import { Vector2 } from "./modules/math/math_module.js";
import { Canvas, Circle } from "./modules/canvas/canvas_module.js";

let v = new Vector2(1, 2);
let c = new Canvas(0, document.getElementById("main"), 400, 400);

let circle = new Circle(c.renderingContext, v, 10, "green");
circle.draw();
