import { screen } from '@testing-library/dom';
import { ensureRender, renderWithTheme } from '@utils/testHelpers';
import React from 'react';
import SnapshotByProduct from '../SnapshotByProduct';
import { MockData, MockDataWithSixItems } from './SnapshotByProduct.mock';
import userEvent from '@testing-library/user-event';

describe('SnapshotByProduct', () => {
  it ('should be show all items', async () => {
    renderWithTheme(<SnapshotByProduct snapshotByProduct={MockData}/>);
    await ensureRender();
    expect(screen.getByText(/minhas rendas fixas/i)).toBeTruthy();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(5);
  })
  it ('should be change items by search', async () => {
    renderWithTheme(<SnapshotByProduct snapshotByProduct={MockData}/>);
    await ensureRender();
    expect(screen.getByText(/minhas rendas fixas/i)).toBeTruthy();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(5);
    userEvent.type(screen.getByTestId('searchInput'), 'tesouro ipca+ com juros semestrais 2024 (ntnb)');
    await ensureRender();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(1);
  });

  it ('should be change change page', async () => {
    renderWithTheme(<SnapshotByProduct snapshotByProduct={MockDataWithSixItems}/>);
    await ensureRender();
    expect(screen.getByText(/minhas rendas fixas/i)).toBeTruthy();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(5);
    userEvent.click(screen.getByRole('button', {
      name: /2/i
    }));
    await ensureRender();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(1);
    userEvent.click(screen.getByRole('button', {
      name: /1/i
    }));
    await ensureRender();
    expect(screen.getAllByTestId('snap-row')).toHaveLength(5);
  });
});