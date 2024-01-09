import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit  {
  @Input('dataWeb') dataWeb: any;
  @Input('dataMobile') dataMobile: any;
  
  screenWidth:any;


  constructor() { }

  ngOnInit(): void {
   this.screenWidth= window.innerWidth;
  }

  onResize(e:any){
    this.screenWidth= window.innerWidth;   
  }
}
