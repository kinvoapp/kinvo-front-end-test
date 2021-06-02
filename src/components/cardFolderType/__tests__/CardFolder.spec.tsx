import { screen } from '@testing-library/dom';
import { ensureRender, renderWithTheme } from '@utils/testHelpers';
import React from 'react';
import CardFolderType from '../CardFolderType';
import { DataCard } from './CardFolder.mock';

describe('Card folder', () => {
  it ('should render only title', async () => {
    renderWithTheme(<CardFolderType title="Titulo" data={DataCard.fixedIncome}/>);
    ensureRender();

    expect(screen.getByText(/titulo/i)).toBeTruthy();
    expect(screen.getByText(/tesouro ipca\+ com juros semestrais 2024 \(ntnb\)/i)).toBeTruthy();
    expect(screen.getByText(/classe/i)).toBeTruthy();
    expect(screen.getByText(/tesouro direto/i)).toBeTruthy();
  });
  it ('should render only positions', async () => {
    renderWithTheme(<CardFolderType title="Posições" data={DataCard.position}/>);
    ensureRender();
    expect(screen.getByText(/posições/i)).toBeTruthy();
    expect(screen.getByText(/valor inves\./i)).toBeTruthy();
    expect(screen.getByText(/699,71/i)).toBeTruthy();
    expect(screen.getByText(/saldo bruto/i)).toBeTruthy();
    expect(screen.getByText(/638,94/i)).toBeTruthy();
    expect(screen.getByText(/rent\./i)).toBeTruthy();
    expect(screen.getByText(/% da cart\./i)).toBeTruthy();
    expect(screen.getByText(/12\.05%/i)).toBeTruthy();
    expect(screen.getAllByText(/cdi/i)[0]).toBeTruthy();
    expect(screen.getByText(/14\.06/i)).toBeTruthy();
    expect(screen.getByText(/sobre cdi/i)).toBeTruthy();
    expect(screen.getByText(/141\.05/i)).toBeTruthy();
  })

  it ('should render only due', async () => {
    renderWithTheme(<CardFolderType title="Vencimento" data={DataCard.due}/>);
    ensureRender();
    expect(screen.getByText(/vencimento/i)).toBeTruthy();
    expect(screen.getByText(/data venc\./i)).toBeTruthy();
    expect(screen.getByText(/14\/08\/2024/i)).toBeTruthy();
    expect(screen.getByText(/dias até venc/i)).toBeTruthy();
    expect(screen.getByText(/1276/i)).toBeTruthy();
  });
})