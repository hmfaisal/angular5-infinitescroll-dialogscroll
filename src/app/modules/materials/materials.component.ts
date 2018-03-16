import { Component, OnInit, OnDestroy, Input,HostListener,} from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
})
export class MaterialsComponent  {

  endReached:boolean=false;

  constructor(

  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollY>100) {
      this.endReached = true;
    }else{
      this.endReached = false;
    }
  }

  ngOnInit() {
    
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}
