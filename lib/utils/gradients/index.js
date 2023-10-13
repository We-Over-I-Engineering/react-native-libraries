"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientDirections = exports.gradientEndDirections = exports.gradientStartDirections = void 0;
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
exports.gradientDirections = {
    left: { x1: '1', y1: '0', x2: '0', y2: '0' },
    right: { x1: '0', y1: '0', x2: '1', y2: '0' },
    top: { x1: '0', y1: '1', x2: '0', y2: '0' },
    bottom: { x1: '0', y1: '0', x2: '0', y2: '1' },
    'left-diagonal': { x1: '0', y1: '0', x2: '0.1', y2: '-1.3' },
    'right-diagonal': { x1: '0', y1: '0', x2: '0.5', y2: '3' },
};
//# sourceMappingURL=index.js.map