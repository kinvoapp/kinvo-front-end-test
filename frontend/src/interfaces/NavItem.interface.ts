export interface NavItemInterface extends NavItemImg {
  title: string;
  link?: string;
  subMenu?: string[];
  active?: boolean;
}

export interface NavItemImg {
  icon: string;
}
