import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experienceData=[
    {
      name:'Fan4all',
      logo:'assets/images/fan4all-logo.jpg',
      bg:'assets/images/fan4all-logo.jpg',
      text:'<ul><li> Framworks : .net Core , Angular</li><li>FAN4ALL is a French technological startup that defines itself as a provider of immersive experiences for sports fans, known as \'Immersive Fan Experiences.\' Through its all-in-one platform accessible via a mobile application and web version</li></ul>',
      role:'Full Stack Developer',
      localanddate:'01/07/2022 - 30/09/2023 | Marrakech, Maroc'

    }
    ,
    {
      name:'Offshoring',
      logo:'assets/images/Logo-OFPPT.jpg',
      bg:'assets/images/Logo-OFPPT.jpg',
      text:'<ul><li>React</li><li>Vue Js</li><li>WordPress</li><li>Tailwind</li><li>BootStrap</li><li>Laravel</li></ul>',
      role:'Stagiaire',
      localanddate:'01/09/2021 - 01/07/2022 | Marrakech, Maroc'
    },
    {
      name:'Province d\'Al Haouz',
      logo:'assets/images/royaume-du-maroc-logo.jpg',
      bg:'assets/images/royaume-du-maroc-logo.jpg',
      text:'<ul><li>Framworks : php, html ,Css ,Bootstrap</li><li>Mail management web application</li></ul>',
      role:'Stagiaire',
      localanddate:'15/05/2021 - 01/06/2021 | Tahanaout, Marrakech , Maroc'
    },
    {
      name:'OFPPT',
      logo:'assets/images/Logo-OFPPT.jpg',
      bg:'assets/images/Logo-OFPPT.jpg',
      text:'<ul><li>Web application</li><li>Desktop app</li><li>Mobile app</li><li>Web application E-Commerce Site</li><li>WordPress</li></ul>',
      role:'Stagiaire',
      localanddate:'01/09/2019 - 01/07/2021 | Marrakech, Maroc'
    }
  ];


  constructor() { }
  screenWidth:any;
  ngOnInit(): void {
   this.screenWidth= window.innerWidth;
  }

  onResize(e:any){
    this.screenWidth= window.innerWidth;   
  }
}
