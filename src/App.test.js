import { render, screen } from '@testing-library/react';
import App from './pages/App/App';
import axios from "axios";
import { act } from 'react-dom/test-utils';

jest.mock("axios");

test('renders login to dashboard element by default', async () => {
  
  axios.get.mockResolvedValue({ data: { loggedIn: false } }); 
  
  await act(async () => {
    render(<App />) 
  });
  
  
  const linkElement = screen.getByText('Login to Dashboard');
  expect(linkElement).toBeInTheDocument();
});
