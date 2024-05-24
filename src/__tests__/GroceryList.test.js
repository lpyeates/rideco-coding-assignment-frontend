import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter')
import GroceryList from '../components/GroceryList';

const mock = new MockAdapter(axios);

test('GroceryList component', () => {
  render(<GroceryList/>)

  const mainHeadline = screen.getByText(/Grocery List/i);
  expect(mainHeadline).toBeInTheDocumnent();
})

it('should load data from the backend', async () => {
  mock.onGet('/groceries/').then(function (response){
    data: [
      {
        name: 'apples',
        quantity: 2,
        status: 'To Buy',
      },
    ]
  });

  render(<GroceryList />);

  const listData = await waitFor(() => screen.getByRole('row', { name: /apples/i }));
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(listData).toHaveTextContent('apples');
  expect(listData).toHaveTextContent('2');
  expect(listData).toHaveTextContent('To Buy');
})