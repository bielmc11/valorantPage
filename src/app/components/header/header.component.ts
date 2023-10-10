import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ancho:number = 0
  ngOnInit(){
    console.log(window.screenX)
  }
  
}
