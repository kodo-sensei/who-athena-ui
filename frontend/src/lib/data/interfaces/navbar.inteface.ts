export interface INavList {
  title: string;
  items: INavListItem[];
}

export interface INavListItem {
  title?: string;
  link?: string;
  children?: [];
}
