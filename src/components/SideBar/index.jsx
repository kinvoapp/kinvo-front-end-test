import { Wrapper } from "./styles";
import { SideBarItem } from "./SideBarItem";
import { data } from "../../helpers/sideBarMenuItems";

export function SideBar() {
  return (
    <Wrapper>
      <nav>
        <ul>
          {data.map((item) => {
            return <SideBarItem key={item.id} icon={item?.icon} title={item.title} />;
          })}
        </ul>
      </nav>
    </Wrapper>
  );
}
