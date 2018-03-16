import { Routes } from '@angular/router';

import { MaterialsComponent } from './materials.component';
import { MaterialsAllComponent } from './components/materials-all/materials-all.component';
import { MaterialDialogComponent } from './components/material-dialog/material-dialog.component';
import { MaterialIdComponent } from './components/material-id/material-id.component';

export const MaterialsRoutes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: ':id',
        component: MaterialIdComponent
      }
    ]
  }
];