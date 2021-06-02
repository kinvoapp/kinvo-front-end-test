import React from 'react';
import { screen } from '@testing-library/react';
import { ensureRender, renderWithTheme } from '@utils/testHelpers';
import KinvoHeader from '../KinvoHeader';

describe('Kinvo Header Data', () => {
  it('shoud be render header and show informations', async () => {
    renderWithTheme(<KinvoHeader />);
    ensureRender();
    expect(screen.getByText(/saldo bruto/i)).toBeTruthy();
    expect(screen.getByText(/valor aplicado/i)).toBeTruthy();
    expect(screen.getByText(/rentabilidade/i)).toBeTruthy();
  });
});
