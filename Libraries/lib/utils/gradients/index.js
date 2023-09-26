"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientEndDirections = exports.gradientStartDirections = void 0;
exports.gradientStartDirections = {
    left: { x: 1, y: 0 },
    right: { x: 0, y: 0 },
    top: { x: 0, y: 1 },
    bottom: { x: 0, y: 0 },
    'left-diagonal': { x: 0.1, y: 0.1 },
    'right-diagonal': { x: 0, y: 0 },
};
exports.gradientEndDirections = {
    left: { x: 0, y: 0 },
    right: { x: 1, y: 0 },
    top: { x: 0, y: 0 },
    bottom: { x: 0, y: 1 },
    'left-diagonal': { x: 0, y: 0 },
    'right-diagonal': { x: 0, y: 0.5 },
};
//# sourceMappingURL=index.js.map