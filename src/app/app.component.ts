import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities = ['Barcelona','Madrid','Valencia']
  name!: string;
  selection!: string
  criteria= ''
  /*title = 'video 11';
  url ="https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg"*/

  addNewCity(city: string): void{
    this.cities.push(city);
  }
  onCityClicked(city: string): void{
    this.selection = city;
  }
  onClear() : void{
    this.selection = '';
  }
  onSearch():void{
    console.log('OnSearch')
  }

}
