import { logger } from './logger';

export const sum = (a: number, b: number): number => {
  logger.info(`Argument a is: ${a}`);
  logger.info(`Argument b is: ${b}`);
  return a + b;
};
