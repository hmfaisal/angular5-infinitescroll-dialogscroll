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
    type: 'link',
    icon: 'explore',
    children: [
      {link: 'new',name: 'NEW',icon:'lnr-flag'},
      {link: 'scanning',name: 'SCANNING',icon: 'lnr-flag'},
      {link: 'processing',name: 'PROCESSING',icon: 'lnr-flag'},
      {link: 'shading',name: 'SHADING',icon: 'lnr-flag'},
      {link: 'completed',name: 'COMPLETED',icon: 'lnr-flag'},
    ]
  },
  {
    link: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    link: '/',
    name: 'MODELS',
    type: 'link',
    icon: 'explore'
  },
  {
    link: '/',
    name: 'IMAGES',
    type: 'link',
    icon: 'explore'
  },
  {
    link: '/',
    name: 'USERS',
    type: 'link',
    icon: 'explore'
  },
  {
    link: '/',
    name: 'CUSTOMERS',
    type: 'link',
    icon: 'explore'
  },
  {
    link: '/',
    name: 'TAGS',
    type: 'link',
    icon: 'explore'
  },
  ,
  {
    link: 'lang',
    name: 'LANGUAGE',
    type: 'lang',
    icon: 'lnr-earth',
    children: [
      {link: 'en',name: 'ENGLISH',icon:'lnr-flag'},
      {link: 'de',name: 'DEUTSCH',icon: 'lnr-flag'},
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

}
