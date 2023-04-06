import { generateId } from '../src/utils';

export const uuidConsumerGroupIdMock = 'id_for_test';

jest.mock('../src/utils', () => {
  const original = jest.requireActual('../src/utils');


  return {
    ...original,
    generateId: jest.fn(),
  };
});

(generateId as jest.Mock).mockImplementation(() => uuidConsumerGroupIdMock);


