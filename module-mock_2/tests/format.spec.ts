import { makeFormatString } from '../src/format';

describe('format string tests', () => {
  test('test generate id part and static part', () => {
    expect(makeFormatString('Sergey', 'Alex')).toBe('id_for_test-Sergey-Alex-static');
  });
});
