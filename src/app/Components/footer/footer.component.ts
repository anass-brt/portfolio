import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  aboutData=[
    {
      title:'Soft Skills',
      info:['Teamwork','Emotion Management','Leadership','Stress Management'],
    },
    {
      title:'Qualities',
      info:['Creativity','Motivation','Social Media'],
    },
    {
      title:'LANGUAGES',
      info:['Arab','English','French'],
    },
    {
      title:'Hobbies',
      info:['Travel','Trip','Sport'],
    }
  ];

}
