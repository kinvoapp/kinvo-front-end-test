import { ensureRender, mockAxios, renderWithAuthRoute, renderWithTheme } from '@utils/testHelpers';
import React from 'react';
import FixedIncomeFund from '../FixedIncomeFund';

describe('Fixed Income Fund', () => {
  it ('should be render', async () => {
    mockAxios.get.mockImplementationOnce(async () => {
      return {
        status: 200,
        data: { data: {} },
        headers: {},
        config: {},
        statusText: 'ok',
      };
    });
    renderWithTheme(<FixedIncomeFund />);
    await ensureRender();
  })
})