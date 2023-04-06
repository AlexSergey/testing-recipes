import { format, generateId } from './utils';

export const makeFormatString = (name: string, surname: string): string => {
  const staticPart = 'static';
  const id = generateId();
  const res = format(name, surname, id, staticPart);
  return res;
};
