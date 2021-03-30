import * as S from 'components/styled/lib';
import { ReactComponent as SvgArrow } from 'assets/images/arrow.svg';

const OrderDropdown = () => {
  return (
    <S.OrderDropdownWrapper>
      <S.OrderDropdown as="select">
        <option value="" disabled selected>
          Ordernar por
        </option>
      </S.OrderDropdown>
      <SvgArrow />
    </S.OrderDropdownWrapper>
  );
};

export default OrderDropdown;
