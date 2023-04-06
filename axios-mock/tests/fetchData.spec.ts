import axios from 'axios';
import { fetchData } from '../src/fetchData';

jest.mock('axios');

test('fetches data from API', async () => {
  const data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };
  (axios.get as jest.Mock).mockResolvedValue({ data });
  const result = await fetchData();
  expect(result)
    .toEqual(data);
});
