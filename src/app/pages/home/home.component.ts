import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { ValorantApiService } from 'src/app/services/valorant-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  abierto: boolean = false
  ui = inject(UiService)
  valorantApiService = inject(ValorantApiService)
  weapons: any[] = []
  

  async ngOnInit(){
    this.ui.getData$().subscribe(info =>{
    this.abierto = info
    });

    try{
      this.weapons = await this.valorantApiService.getAllWeapons()
      console.log(this.weapons)
    } catch(error){
      console.log(error)
    }
  }
}
