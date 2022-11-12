import { logger } from './__mocks__/logger';

jest.mock('./src/logger', () => ({ logger }));
