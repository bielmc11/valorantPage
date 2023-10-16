import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {
  http = inject(HttpClient);
  private armas: any[] = [];
  private baseUrlWeapons:string = ''

  constructor() { }

  getAllWeapons(): Promise<any[]>{
    return lastValueFrom(this.http.get<any[]>('https://valorant-api.com/v1/weapons'))
  }


}
