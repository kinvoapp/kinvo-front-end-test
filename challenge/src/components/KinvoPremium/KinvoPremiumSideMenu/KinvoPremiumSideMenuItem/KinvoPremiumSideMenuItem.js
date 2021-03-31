import * as S from 'components/styled/lib';
import DynamicSvg from 'components/DynamicSvg/DynamicSvg';
import { ReactComponent as ArrowSvg } from 'assets/images/arrow.svg';

const KinvoPremiumSideMenuItem = ({ name, text, svgColor, subItems }) => {
  return (
    <S.KinvoPremiumSideMenuItemWrapper key={name}>
      <S.KinvoPremiumSideMenuItem color={subItems.length > 0 ? 'ghostwhite' : 'white'}>
        <S.KinvoPremiumSideMenuItemContent>
          <DynamicSvg name={name} color={svgColor} />
          <S.Text size="13" weight="500" margin="0 1rem">
            {text}
          </S.Text>
        </S.KinvoPremiumSideMenuItemContent>
        <ArrowSvg />
      </S.KinvoPremiumSideMenuItem>
      {subItems && (
        <S.KinvoPremiumSideMenuSubItemWrapper>
          {subItems.map((subItem, index) => (
            <S.KinvoPremiumSideMenuSubItem color={subItem.activeColor} key={index}>
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
