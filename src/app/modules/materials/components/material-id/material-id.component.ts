import { Component, Inject, TemplateRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { MaterialDialogComponent } from '../../components/material-dialog/material-dialog.component';

import {
  MaterialsService,
  PagerService
} from '../../../../services';

@Component({
  selector: 'app-material-id',
  template: ''
})
export class MaterialIdComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  dialogRef: MatDialogRef<MaterialDialogComponent>;
  material: any;
  id: any;
  error: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private materialsService: MaterialsService,
    public snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {
    this.route.params.subscribe(
      params => {
        this.id = params.id;
      });
      this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
        this.error = res;
      }));
  }

  ngOnInit() {
    if (this.id) {
      this.getMaterial(this.id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMaterial(id): void {
    this.subscription.add(this.materialsService.getById(id)
      .subscribe(data => {
        this.material = data;
      },
      error => {
        this.snackBar.open(this.error, 'X', {
          duration: 2000,
        });
      }, 
      () => {
        if (this.material != 'undefined') {
          this.openDialog(this.material);
        }
      }));
  }

  openDialog(material) {
    this.dialogRef = this.dialog.open(MaterialDialogComponent, {
      id: material.id,
      data: {
        material: material,
      }
    });
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.dialogRef = null;
      this.router.navigate(['../']);
    });
  }
}
