import { MenuItem } from './menuitem.model';
export interface MenuCategory{
    $key?: string;
    name: string;
    menuitems: MenuItem[];
}