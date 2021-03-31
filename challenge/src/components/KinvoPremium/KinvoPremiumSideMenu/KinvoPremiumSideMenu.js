import * as S from 'components/styled/lib';
import KinvoPremiumSideMenuItem from 'components/KinvoPremium/KinvoPremiumSideMenu/KinvoPremiumSideMenuItem/KinvoPremiumSideMenuItem';
import { menuItems } from 'helpers/menuPool';

const KinvoPremiumSideMenu = () => {
  return (
    <S.KinvoPremiumSideMenu>
      {menuItems.map((menuItem) => (
        <KinvoPremiumSideMenuItem
          key={menuItem.name}
          name={menuItem.name}
          text={menuItem.title}
          svgColor={menuItem.subItems.length <= 0 ? 'cyan' : 'violet'}
          subItems={menuItem.subItems.length > 0 && menuItem.subItems}
        />
      ))}
    </S.KinvoPremiumSideMenu>
  );
};

export default KinvoPremiumSideMenu;
