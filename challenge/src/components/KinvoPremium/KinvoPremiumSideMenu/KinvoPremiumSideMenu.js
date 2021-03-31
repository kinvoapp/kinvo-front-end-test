import * as S from 'components/styled/lib';
import KinvoPremiumSideMenuItem from 'components/KinvoPremium/KinvoPremiumSideMenu/KinvoPremiumSideMenuItem/KinvoPremiumSideMenuItem';
import { menuItems } from 'helpers/menuPool';

const KinvoPremiumSideMenu = () => {
  return (
    <S.KinvoPremiumSideMenu>
      {menuItems.map((menuItem) => (
        <KinvoPremiumSideMenuItem
          name={menuItem.name}
          text={menuItem.title}
          color={menuItem.subItems.length <= 0 && 'cyan'}
          subItems={menuItem.subItems.length > 0 && menuItem.subItems}
        />
      ))}
    </S.KinvoPremiumSideMenu>
  );
};

export default KinvoPremiumSideMenu;
