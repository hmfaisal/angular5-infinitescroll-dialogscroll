import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonCompoModule } from '../common-compo/common-compo.module';

import { MaterialsRoutes } from './materials.routing';
import { MaterialsAllComponent } from './components/materials-all/materials-all.component';
import { MaterialsSingleComponent } from './components/materials-single/materials-single.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CommonCompoModule,
    RouterModule.forChild(MaterialsRoutes),
  ],
  declarations: [
    MaterialsAllComponent,
    MaterialsSingleComponent
  ],
  exports:[
    MaterialsSingleComponent
  ]
})
export class MaterialsModule { }