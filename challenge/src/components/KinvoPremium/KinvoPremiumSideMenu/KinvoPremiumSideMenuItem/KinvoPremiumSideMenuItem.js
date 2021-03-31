import * as S from 'components/styled/lib';
import DynamicSvg from 'components/DynamicSvg/DynamicSvg';
import { ReactComponent as ArrowSvg } from 'assets/images/arrow.svg';

const KinvoPremiumSideMenuItem = ({ name, text, color, subItems }) => {
  return (
    <S.KinvoPremiumSideMenuItemWrapper>
      <S.KinvoPremiumSideMenuItem color={subItems && 'ghostwhite'}>
        <S.KinvoPremiumSideMenuItemContent>
          <DynamicSvg name={name} color={color} />
          <S.Text size="13" weight="500" margin="0 1rem">
            {text}
          </S.Text>
        </S.KinvoPremiumSideMenuItemContent>
        <ArrowSvg />
      </S.KinvoPremiumSideMenuItem>
      {subItems && (
        <S.KinvoPremiumSideMenuSubItemWrapper>
          {subItems.map((subItem) => (
            <S.KinvoPremiumSideMenuSubItem active={subItem.active}>
              <S.Text size="13" weight="500">
                {subItem.title}
              </S.Text>
              <ArrowSvg />
            </S.KinvoPremiumSideMenuSubItem>
          ))}
        </S.KinvoPremiumSideMenuSubItemWrapper>
      )}
    </S.KinvoPremiumSideMenuItemWrapper>
  );
};

export default KinvoPremiumSideMenuItem;
