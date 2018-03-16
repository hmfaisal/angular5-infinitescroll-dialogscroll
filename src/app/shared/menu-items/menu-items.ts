import { Injectable } from '@angular/core';

export interface ChildrenItems {
  link: string;
  name: string;
  icon: string;
  type?: string;
}

export interface Menu {
  link: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    link: '/materials',
    name: 'MATERIALS',
    type: 'sub',
    icon: 'lnr-layers',
    children: [
      {link: 'new',name: 'NEW',icon:'lnr-flag'},
      {link: 'scanning',name: 'SCANNING',icon: 'lnr-flag'},
      {link: 'processing',name: 'PROCESSING',icon: 'lnr-flag'},
      {link: 'shading',name: 'SHADING',icon: 'lnr-flag'},
      {link: 'completed',name: 'COMPLETED',icon: 'lnr-flag'},
    ]
  },
  {
    link: '/models',
    name: 'MODELS',
    type: 'sub',
    icon: 'lnr-magic-wand'
  },
  {
    link: '/images',
    name: 'IMAGES',
    type: 'sub',
    icon: 'lnr-picture'
  },
  {
    link: '/users',
    name: 'USERS',
    type: 'sub',
    icon: 'lnr-user'
  },
  {
    link: '/customers',
    name: 'CUSTOMERS',
    type: 'sub',
    icon: 'lnr-users'
  },
  {
    link: '/tags',
    name: 'TAGS',
    type: 'sub',
    icon: 'lnr-paperclip'
  },
  {
    link: 'lang',
    name: 'LANGUAGE',
    type: 'lang',
    icon: 'lnr-earth',
    children: [
      {link: 'en',name: 'ENGLISH',icon:'lnr-flag'},
      {link: 'de',name: 'DEUTSCH',icon: 'lnr-flag'},
    ]
  },
  {
    link: 'more',
    name: 'MORE',
    type: 'more',
    icon: 'lnr-menu',
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

}
