export interface NavItemInterface extends NavItemImg {
  title: string;
  link?: string;
  subMenu?: LinkList[];
}

export interface LinkList {
  title: string;
  link: string;
}

export interface NavItemImg {
  icon: string;
}
