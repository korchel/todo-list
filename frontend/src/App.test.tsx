import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {server} from './mock/server';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it('fetches, adds, removes, toggles todos', async () => {
    render(<App />);
    expect(await screen.findByText('Task1')).toBeInTheDocument();

    const input = await screen.findByRole('textbox');
    userEvent.type(input, "task3{enter}");
    expect(await screen.findByText('Task3')).toBeInTheDocument();

    const checkbox = await screen.findByLabelText('Task2');
    userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());

    const button = await screen.findByTestId('btn1');
    userEvent.click(button);
    await waitFor(() => expect(screen.queryByText('Task1')).not.toBeInTheDocument());
  });
});

