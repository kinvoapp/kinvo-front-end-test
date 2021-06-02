import { theme } from '@styles/theme/theme';
import { act, render } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import React from 'react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AxiosStatic } from 'axios';

export const mockAxios: jest.Mocked<AxiosStatic> = require('axios').default;

export const renderWithTheme = (children: React.ReactNode, options = undefined) => {
  (ThemeConsumer as any)._currentValue = theme;
  return render(<>{children}</>, options);
};

export const renderWithAuthRoute = (ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}): any => {
  (ThemeConsumer as any)._currentValue = theme;
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    // @ts-ignore
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};
