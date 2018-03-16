import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialsRoutes } from './materials.routing';
import { MaterialsComponent } from './materials.component';
import { MaterialsAllComponent } from './components/materials-all/materials-all.component';
import { MaterialsSingleComponent } from './components/materials-single/materials-single.component';
import { MaterialDialogComponent } from './components/material-dialog/material-dialog.component';
import { MaterialIdComponent } from './components/material-id/material-id.component';
import { DialogService } from '../../services/dialog.service';
import {
  MaterialsService,
} from '../../services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MaterialsRoutes),
  ],
  declarations: [
    MaterialsComponent,
    MaterialsAllComponent,
    MaterialsSingleComponent,
    MaterialDialogComponent,
    MaterialIdComponent
  ],
  exports:[

  ],
  providers:[
    MaterialsService,
    DialogService 
  ],
  entryComponents: [
    MaterialDialogComponent
  ]
})
export class MaterialsModule { }