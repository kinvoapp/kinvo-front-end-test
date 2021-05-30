import { Item, ItemContent, Pointer } from "./styles";

import ArrowIcon from "../../assets/icons/arrow.svg";

export function SideBarItem({ icon, title }) {
  return (
    <Item normalize={!!icon}>
      <ItemContent>
        {!!icon ? <img src={icon} alt={title[0] + title[1]} /> : <Pointer />}

        {!!icon ? (
          <div>
            <span>{title[0]}</span>
            <span>{title[1]}</span>{" "}
          </div>
        ) : (
          <div>
            <span>{title}</span>
          </div>
        )}
      </ItemContent>
      <img src={ArrowIcon} alt="arrow" />
    </Item>
  );
}
