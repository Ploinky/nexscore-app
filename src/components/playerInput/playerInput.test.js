import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import PlayerInput from './playerInput';

test('scoreboard', async () => {
  const onPlayerAdd = jest.fn();
  const errorText = 'This is an error';

  render(<PlayerInput error={errorText} onPlayerAdd={onPlayerAdd}/>);

  const button = screen.getByTestId('button');
  userEvent.click(button);

  await waitFor(() => {
    expect(onPlayerAdd).toHaveBeenCalled();

    const errorText = screen.getByText(/This is an error/i);
    expect(errorText).toBeInTheDocument();
  });
});
