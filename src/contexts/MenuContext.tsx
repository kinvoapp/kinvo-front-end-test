//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
type VisibilityType = "visible" | "hidden";
interface IData {
  visibility: VisibilityType;
  toggleVisibility: () => void;
}
interface IProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
export const MenuContext = createContext({} as IData);
//=========================================================[ < MenuProvider > ]
export function MenuProvider({ children }: IProps) {
  //-------------------------------------------------------------< properties >
  const [visibility, setVisibility] = useState<VisibilityType>("visible");
  //----------------------------------------------------------------< methods >
  function toggleVisibility() {
    setVisibility(visibility === "visible" ? "hidden" : "visible");
  }
  //-----------------------------------------------------------------< return >
  return (
    <MenuContext.Provider value={{ visibility, toggleVisibility }}>
      {children}
    </MenuContext.Provider>
  );
}
