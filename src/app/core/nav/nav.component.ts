import {Component, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItems } from '../menu-items/menu-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  constructor(
    public translate: TranslateService,
    public menuItems: MenuItems,
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

}