import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  title = 'portfolio';

  skillsDataWeb:any;
  skillsDataMobile:any;


  dataWeb={
    dataFrontEnd:[
      [
      {langName:"Java Script",img:"assets/images/java-script.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"Angular",img:"assets/images/Angular_logo.png",pourcentage:"90%",rank:"Advanced"},
      {langName:"React",img:"assets/images/ReactJs-logo.png",pourcentage:"70%",rank:"Intermediate"}
      ],
      [{langName:"Css3",img:"assets/images/css.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"BootStrap",img:"assets/images/bootstrap.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"PrimeNg",img:"assets/images/primeng-logo.png",pourcentage:"70%",rank:"Advanced"}
      ]
      ],
    dataBackEnd :[
      [
      {langName:"DotNet Core",img:"assets/images/dotnet-core-logo.png",pourcentage:"90%",rank:"Advanced"},
      {langName:"Laravel",img:"assets/images/laravel-logo.png",pourcentage:"70%",rank:"Intermediate"}
      ],
      [
        {langName:"C#",img:"assets/images/csharp-logo.png",pourcentage:"90%",rank:"Advanced"},
        {langName:"Php",img:"assets/images/php-logo.png",pourcentage:"70%",rank:"Intermediate"}
      ]
      ],
    dataMobile:[
        [
        {langName:"Android Studio",img:"assets/images/android-studio-logo.png",pourcentage:"80%",rank:"Advanced"},
        {langName:"Unity",img:"assets/images/unity-logo.png",pourcentage:"70%",rank:"Intermediate"}
        ],
        [
          {langName:"C#",img:"assets/images/csharp-logo.png",pourcentage:"90%",rank:"Advanced"},
          {langName:"Java",img:"assets/images/java-logo.png",pourcentage:"70%",rank:"Intermediate"}
        ]
      ],
    dataDesignTools:[
        [
          {langName:"PhotoShop",img:"assets/images/photoshop.png",pourcentage:"70%",rank:"Advanced"}
        ]
        ]

  };

  dataMobile={
    dataFrontEnd:[
      
      {langName:"Java Script",img:"assets/images/java-script.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"Angular",img:"assets/images/Angular_logo.png",pourcentage:"90%",rank:"Advanced"},
      {langName:"React",img:"assets/images/ReactJs-logo.png",pourcentage:"70%",rank:"Intermediate"},
      {langName:"Css3",img:"assets/images/css.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"BootStrap",img:"assets/images/bootstrap.png",pourcentage:"70%",rank:"Advanced"},
      {langName:"PrimeNg",img:"assets/images/primeng-logo.png",pourcentage:"70%",rank:"Advanced"}
      
      ],
    dataBackEnd :[
      
      {langName:"DotNet Core",img:"assets/images/dotnet-core-logo.png",pourcentage:"90%",rank:"Advanced"},
      {langName:"Laravel",img:"assets/images/laravel-logo.png",pourcentage:"70%",rank:"Intermediate"},
      {langName:"C#",img:"assets/images/csharp-logo.png",pourcentage:"90%",rank:"Advanced"},
      {langName:"Php",img:"assets/images/php-logo.png",pourcentage:"70%",rank:"Intermediate"}
      ],
    dataMobile:[
        
        {langName:"Android Studio",img:"assets/images/android-studio-logo.png",pourcentage:"80%",rank:"Advanced"},
        {langName:"Unity",img:"assets/images/unity-logo.png",pourcentage:"70%",rank:"Intermediate"},
        {langName:"C#",img:"assets/images/csharp-logo.png",pourcentage:"90%",rank:"Advanced"},
        {langName:"Java",img:"assets/images/java-logo.png",pourcentage:"70%",rank:"Intermediate"}
        
      ],
    dataDesignTools:[
        
          {langName:"PhotoShop",img:"assets/images/photoshop.png",pourcentage:"70%",rank:"Advanced"}
        
        ]

  };







  constructor(private viewportScroller: ViewportScroller) {}
  ngOnInit(): void {
   this.skillsDataWeb=this.dataWeb.dataFrontEnd;
   this.skillsDataMobile=this.dataMobile.dataFrontEnd;
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
