import { screen } from '@testing-library/dom';
import { ensureRender, renderWithTheme } from '@utils/testHelpers';
import React from 'react';
import Cards from '../Cards';

describe('Card test', () => {
  it ('should be render currency', async () => {
    renderWithTheme(<Cards type="currency" value={"1234"} title="teste"/>);
    ensureRender;
    expect(screen.getByText(/teste/i)).toBeTruthy();
    expect(screen.getByText(/r\$ 12,34/i)).toBeTruthy();
  });

  it ('should be render percentage', async () => {
    renderWithTheme(<Cards type="percentage" value={"1234"} title="teste"/>);
    ensureRender;
    expect(screen.getByText(/teste/i)).toBeTruthy();
    expect(screen.getByText(/1234%/i)).toBeTruthy();
  });
})