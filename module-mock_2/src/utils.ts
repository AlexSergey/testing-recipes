export const generateId = (): string => `${Math.floor(Math.random() * 100)}`;

export const format = (name: string, surname: string, id: string, staticPart: string) => {
  return `${id}-${name}-${surname}-${staticPart}`;
}
