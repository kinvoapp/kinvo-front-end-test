import React, { useContext } from 'react';
import FixedIncomeContext from '../../contexts/fixedIncome';
import AssetsInfo from '../AssetsInfo';
import AssetsPosition from '../AssetsPosition';
import AssetsDueDate from '../AssetsDueDate';

function AssetsTableData() {
  const { assets } = useContext(FixedIncomeContext);

  return (
    <table>
      <tbody>
        {assets.map(({ fixedIncome, position, due }) => (
          <tr key="fixedIncome.name">
            <td>
              <AssetsInfo {...{ fixedIncome }} />
            </td>
            <td>
              <AssetsPosition {...{ position }} />
            </td>
            <td>
              <AssetsDueDate {...{ due }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AssetsTableData;
