import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaPipes';
  name='Sheldon';
  myArray=[1,2,3,4,5,6,7,8];
  PI=Math.PI;
  myNum=0.589;
  salary=3500.5;
  nerd={
    name:'Sheldon',
    alias:'Shelly',
    song: 'soft Kitty',
    Skill: ['eidectic memory', 'makes people nervous'],
    youtubeChannel: 'Fun With Flags',
    address: {
      Street: 'Elm Street',
      number: 3,
      city: 'pasadena'
    }
  };
  myDate=new Date();
  video='o-0ygW-B_gI';
}
