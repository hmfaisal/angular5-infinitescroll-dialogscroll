import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import {CdkScrollable} from '@angular/cdk/scrolling';

import {
  MaterialsService,
  PagerService
} from '../../../../services';

@Component({
  selector: 'app-materials-all',
  templateUrl: './materials-all.component.html',
  styleUrls: ['./materials-all.component.scss']
})
export class MaterialsAllComponent implements OnInit, OnDestroy{

  private subscription = new Subscription();
  materials: any[];
  data: any[] = [];
  pager: any = {};
  pagedItems: any[];

  error: string;
  endReached = false;

  constructor(
    private materialsService: MaterialsService,
    private pagerService: PagerService,
    private router: Router,
    public snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {
    this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
      this.error = res;
    }));
    
  }

  ngOnInit() {
    this.getMaterials();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMaterials(): void {
    this.subscription.add(this.materialsService.getAll()
      .subscribe(data => {
        this.materials = data;
        this.setPage(1);
      },
      error => {
        this.snackBar.open(this.error, 'X', {
          duration: 2000,
        });
      }));
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.materials.length, page);
    let pagedItems = this.materials.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.data = this.data.concat(pagedItems);
  }

  onScroll(e) {
    this.endReached = e.endReached;
    if (this.endReached == true) {
      this.setPage(this.pager.currentPage + 1);
    }
  }

}
