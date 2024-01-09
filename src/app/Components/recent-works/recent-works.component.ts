import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-works',
  templateUrl: './recent-works.component.html',
  styleUrl: './recent-works.component.scss'
})
export class RecentWorksComponent implements OnInit {
  screenWidth:any;

  RecentWorksData=[
    {
      name:'Fan4all',
      logo:'assets/images/fan4allmywork.png',
      link:'https://experience.fan4all.com/',
    },
  ];

  ngOnInit(): void {
   this.screenWidth= window.innerWidth;
  }

  onResize(e:any){
    this.screenWidth= window.innerWidth;   
  }
}
