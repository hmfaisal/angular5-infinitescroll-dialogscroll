import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../../../../services/dialog.service';
import {
  MaterialsService,
} from '../../../../services';

@Component({
  selector: 'app-materials-single',
  templateUrl: './materials-single.component.html',
  styleUrls: ['./materials-single.component.scss']
})
export class MaterialsSingleComponent implements OnInit, OnDestroy {

  @Input() singleMaterial: any;
  private subscription = new Subscription();
  result: any;

  constructor(
    private materialsService: MaterialsService,
    private dialogService: DialogService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(material) {
    this.subscription.add(this.dialogService
      .material(material)
      .subscribe(res => this.result = res));
  }

  onClick(id){
    this.router.navigate(['/materials', id]);
  }

}
