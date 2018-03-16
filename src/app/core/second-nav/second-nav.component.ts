import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.scss']
})
export class SecondNavComponent implements OnInit {

  @Input() menuitem: any;
  menus: any[] = [];

  constructor(
    public menuItems: MenuItems,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMenu(this.menuitem);
  }

  getMenu(menuitem){
    for(let menu of this.menuItems.getAll()){
      if(menu.link == menuitem){
        for(let childitem of menu.children){
          this.menus.push(childitem);
        }
      }
    }
  }

}
