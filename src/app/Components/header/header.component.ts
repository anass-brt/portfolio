import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  constructor() { }
  screenWidth:any;
  ngOnInit(): void {
   this.screenWidth= window.innerWidth;
  }

  onResize(e:any){
    this.screenWidth= window.innerWidth;
  }
}
