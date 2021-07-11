import React from "react";
import Link from "next/link";
import Image from "next/image";

import { List, ListItemContainer, ListItemLink } from "./styles";

import arrowRightIcon from "../../assets/icons/arrow-right.svg";

type SublistItem = {
  label?: string;
  url?: string;
};

type SubListProps = {
  items: SublistItem[];
};

function SubList({ items }: SubListProps) {
  return (
    <List>
      {items.map((item, idx) => (
        <ListItemContainer height="47px" key={idx} bullet={true}>
          <Link href={item.url ?? "#"}>
            <ListItemLink>
              <span className="label">{item.label}</span>
              <Image src={arrowRightIcon} />
            </ListItemLink>
          </Link>
        </ListItemContainer>
      ))}
    </List>
  );
}

type ListItemProps = {
  children?: React.ReactNode;
  iconUrl?: string;
  href?: string;
  isActive?: boolean;
  subItems?: SublistItem[];
};

function ListItem({
  children,
  iconUrl,
  href,
  isActive,
  subItems,
}: ListItemProps) {
  return (
    <>
      <ListItemContainer isActive={isActive}>
        <Link href={href ?? "/"}>
          <ListItemLink>
            <Image src={iconUrl} className="icon" width={34} height={34} />
            <span className="label">{children}</span>
            <Image src={arrowRightIcon} />
          </ListItemLink>
        </Link>
      </ListItemContainer>
      {isActive && <SubList items={subItems} />}
    </>
  );
}

export default ListItem;
