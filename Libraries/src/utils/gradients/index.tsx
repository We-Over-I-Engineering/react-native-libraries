export const gradientStartDirections = {
  left: {x: 1, y: 0},
  right: {x: 0, y: 0},
  top: {x: 0, y: 1},
  bottom: {x: 0, y: 0},
  'left-diagonal': {x: 0.1, y: 0.1},
  'right-diagonal': {x: 0, y: 0},
};

export const gradientEndDirections = {
  left: {x: 0, y: 0},
  right: {x: 1, y: 0},
  top: {x: 0, y: 0},
  bottom: {x: 0, y: 1},
  'left-diagonal': {x: 0, y: 0},
  'right-diagonal': {x: 0, y: 0.5},
};

export const gradientDirections = {
  left: {x1: '1', y1: '0', x2: '0', y2: '0'},
  right: {x1: '0', y1: '0', x2: '1', y2: '0'},
  top: {x1: '0', y1: '1', x2: '0', y2: '0'},
  bottom: {x1: '0', y1: '0', x2: '0', y2: '1'},
  'left-diagonal': {x1: '0', y1: '0', x2: '0.1', y2: '-1.3'},
  'right-diagonal': {x1: '0', y1: '0', x2: '0.5', y2: '3'},
};
