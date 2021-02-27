import React, { useState, useCallback } from 'react';

import chevronRightIcon from '../../../assets/chevron_right_icon.svg';
import { Divider } from '../Divider';
import { SideBarSubItem } from '../SideBarSubItem';
import { Container, Icon, Title } from './styles';

interface SubItem {
  title: string;
  path: string;
}

interface SideBarItemProps {
  title: string;
  icon: string;
  subItems: SubItem[];
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  title,
  subItems
}) => {
  const [expanded, setExpanded] = useState(() => !!subItems.length);

  const handleToogleExpanded = useCallback(() => {
    setExpanded(state => !state);
  }, []);

  return (
    <Container>
      <button type="button" onClick={handleToogleExpanded}>
        <div>
          <Icon src={icon} />
          <Title>{title}</Title>
        </div>

        <img src={chevronRightIcon} alt="chevron icon" width={9} height={5} />
      </button>

      <Divider />

      {expanded && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {subItems.map(subItem => (
            <>
              <SideBarSubItem path={subItem.path} title={subItem.title} />

              <Divider />
            </>
          ))}
        </div>
      )}
    </Container>
  );
};
