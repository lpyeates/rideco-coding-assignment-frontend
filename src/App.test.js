// import { render, screen } from '@testing-library/react';
// import axiosMock from 'axios';
// import App from './App';

// jest.mock('axios')

// test('renders learn react link', () => {
//   axiosMock.get.mockResolvedValueOnce({ data: { title: 'Hello World' } });

//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// import React from 'react'
// import {render, cleanup} from '@testing-library/react'
// import App from './App'
const React = require('react');
const { render, cleanup } = require('@testing-library/react');
const App = require('./App')

describe('Take a snapshot', () => {
  afterEach(cleanup)
    it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })
});
