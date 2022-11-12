const fakePino = {
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn()
};

const fakePinoFunc = () => {
  return fakePino;
};
fakePinoFunc.destination = jest.fn();

jest.mock('./logger', () => { return fakePinoFunc; });
