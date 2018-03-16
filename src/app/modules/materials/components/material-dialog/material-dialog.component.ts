import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import {
  MaterialsService,
} from '../../../../services';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  materials: any[];
  error: string;

  constructor(
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materialsService: MaterialsService,
    private router: Router,
    public snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {
    this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
      this.error = res;
    }));
   }

  ngOnInit() {
    this.renderer.addClass(document.body, 'dialog-open');
    this.getMaterials();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.renderer.removeClass(document.body, 'dialog-open');
  }

  onDialogClose(e) {
    this.dialogRef.close();
    this.renderer.removeClass(document.body, 'dialog-open');
  }

  onClickedOutside(e) {
    this.dialogRef.close();
    this.renderer.removeClass(document.body, 'dialog-open');
  }

  getMaterials(): void {
    this.subscription.add(this.materialsService.getAll()
      .subscribe(data => {
        this.materials = data;
      },
      error => {
        this.snackBar.open(this.error, 'X', {
          duration: 2000,
        });
      }));
  }

}
