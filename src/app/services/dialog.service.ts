import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { MaterialDialogComponent } from '../modules/materials/components/material-dialog/material-dialog.component';


@Injectable()
export class DialogService {

    constructor(
        private dialog: MatDialog
    ) { }

    public material(material:any): Observable<boolean> {
        let dialogRef = this.dialog.open(MaterialDialogComponent, {
            data: {
                material:material,
            },
          });
        return dialogRef.afterClosed();
    }

}