export function add(...args) {
  return args.reduce((x, y) => x + y, 0);
};
