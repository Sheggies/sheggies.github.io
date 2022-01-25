"use strict";

class Canvas {
    #id;
    #parent;
    #canvasElement;

    /**
     * Creates a new canvas and makes it a child of the specified parent element
     * @param {number} id Canvas id
     * @param {Element} parent Parent element
     * @param {number} width Canvas width
     * @param {number} height Canvas height
     */
    constructor(id, parent, width, height) {
        this.#id = id;
        this.#parent = parent;
        this.#canvasElement = document.createElement("canvas");
        this.#canvasElement.width = width;
        this.#canvasElement.height = height;
        this.#parent.appendChild(this.#canvasElement);
    }

    /**
     * Returns the name of the class
     * @returns {string} Name
     */
    get name() {
        return "Canvas";
    }

    /**
     * Returns the canvas id
     * @returns {number} Canvas id
     */
    get id() {
        return this.#id;
    }

    /**
     * Returns the canvas rendering context
     * @returns {CanvasRenderingContext2D} Rendering context
     */
    get renderingContext() {
        return this.#canvasElement.getContext("2d");
    }

    /**
     * The canvas' width
     * @returns {number} Width in CSS pixel
     */
    get width() {
        return this.#canvasElement.width;
    }

    /**
     * The canvas' height
     * @returns {number} Height in CSS pixel
     */
    get height() {
        return this.#canvasElement.height;
    }

    /**
     * Sets the canvas width to `v`
     * @param {number} v Width in CSS pixel
     */
    set width(v) {
        if (Number.isNaN(v)) {
            return;
        }
        this.#canvasElement.width = v;
    }
    
    /**
     * Sets the canvas height to `v`
     * @param {number} v Height in CSS pixel
     */
    set height(v) {
        if (Number.isNaN(v)) {
            return;
        }
        this.#canvasElement.height = v;
    }
}

export default Canvas;
