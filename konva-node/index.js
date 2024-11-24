import { Canvas, Image } from 'canvas'; // Import Canvas and Image from canvas
import Konva from 'konva';

// Mock window and document for Node.js
Konva.window = {
  Image: Image,
  devicePixelRatio: 1,
};
Konva.document = {
  createElement: () => {},
  documentElement: {
    addEventListener: () => {},
  },
};

// Global polyfill for requestAnimationFrame
global.requestAnimationFrame = (cb) => {
  setImmediate(cb);
};

// Create canvas in Node.js environment
Konva.Util.createCanvasElement = () => {
  const node = new Canvas();
  node.style = {}; // Mock style object
  return node;
};

// Create image in Node.js environment
Konva.Util.createImageElement = () => {
  const node = new Image();
  node.style = {}; // Mock style object
  return node;
};

// Disable _checkVisibility in Node.js
Konva.Stage.prototype._checkVisibility = () => {};

export default Konva;
