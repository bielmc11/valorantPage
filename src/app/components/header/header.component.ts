import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ui = inject(UiService);

  toggle(){
    const lista = document.querySelector('.lista');
    this.ui.change();
    lista?.classList.toggle('nav_toglle_active')
  }
}
