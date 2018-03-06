import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ],
  declarations: [

  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
   ],
  providers: [ ]
})
export class SharedModule { }
